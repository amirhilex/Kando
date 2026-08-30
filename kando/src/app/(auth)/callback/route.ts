import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function CallbackPage() {
  const supabase = await createClient()
  
  const { data: { session }, error } = await supabase.auth.getSession()
  
  if (error || !session) {
    redirect('/auth/signin')
  }
  
  // User is authenticated, redirect to dashboard
  redirect('/dashboard')
}
