import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function signIn(formData: FormData) {
  const supabase = await createClient()
  
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  
  if (!email || !password) {
    return { error: 'Email and password are required' }
  }
  
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    
    if (error) {
      return { error: error.message }
    }
    
    if (data.user) {
      revalidatePath('/', 'layout')
      redirect('/dashboard')
    }
    
    return { error: 'Sign in failed' }
  } catch (err) {
    return { error: 'An unexpected error occurred' }
  }
}

export async function signUp(formData: FormData) {
  const supabase = await createClient()
  
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const fullName = formData.get('fullName') as string
  
  if (!email || !password) {
    return { error: 'Email and password are required' }
  }
  
  if (password.length < 8) {
    return { error: 'Password must be at least 8 characters' }
  }
  
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
        emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
      },
    })
    
    if (error) {
      return { error: error.message }
    }
    
    // Create user profile
    if (data.user) {
      const { error: profileError } = await supabase.from('profiles').insert({
        id: data.user.id,
        email: email,
        full_name: fullName || null,
        language: 'en',
      })
      
      if (profileError) {
        console.error('Failed to create profile:', profileError)
      }
    }
    
    return { success: true, message: 'Check your email for the confirmation link' }
  } catch (err) {
    return { error: 'An unexpected error occurred' }
  }
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/auth/signin')
}

export async function resetPassword(formData: FormData) {
  const supabase = await createClient()
  
  const email = formData.get('email') as string
  
  if (!email) {
    return { error: 'Email is required' }
  }
  
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password`,
    })
    
    if (error) {
      return { error: error.message }
    }
    
    return { success: true, message: 'Check your email for the password reset link' }
  } catch (err) {
    return { error: 'An unexpected error occurred' }
  }
}

export async function updatePassword(formData: FormData) {
  const supabase = await createClient()
  
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string
  
  if (!password || !confirmPassword) {
    return { error: 'Both password fields are required' }
  }
  
  if (password !== confirmPassword) {
    return { error: 'Passwords do not match' }
  }
  
  if (password.length < 8) {
    return { error: 'Password must be at least 8 characters' }
  }
  
  try {
    const { error } = await supabase.auth.updateUser({
      password: password,
    })
    
    if (error) {
      return { error: error.message }
    }
    
    redirect('/dashboard')
  } catch (err) {
    return { error: 'An unexpected error occurred' }
  }
}
