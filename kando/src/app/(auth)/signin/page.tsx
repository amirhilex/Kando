import { signIn } from '@/lib/auth/actions'
import { useI18n } from '@/i18n'

export default function SignInPage() {
  const { t, locale } = useI18n()
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black px-4">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
            {t.auth.signIn}
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {t.auth.hasAccount}{' '}
            <a href="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
              {t.auth.signUp}
            </a>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" action={signIn}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {t.common.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
                placeholder="you@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {t.common.password}
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 block w-full rounded-md border border-zinc-300 px-3 py-2 text-zinc-900 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500 dark:border-zinc-700"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-zinc-600 dark:text-zinc-400">
                Remember me
              </label>
            </div>
            
            <a href="/auth/reset-password" className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
              {t.auth.forgotPassword}
            </a>
          </div>
          
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
          >
            {t.auth.signIn}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <button
            onClick={() => window.location.href = locale === 'fa' ? '/?lang=fa' : '/?lang=en'}
            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
          >
            {locale === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
          </button>
        </div>
      </div>
    </div>
  )
}
