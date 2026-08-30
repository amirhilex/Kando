import { resetPassword } from '@/lib/auth/actions'
import { useI18n } from '@/i18n'

export default function ResetPasswordPage() {
  const { t, locale } = useI18n()
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black px-4">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg dark:bg-zinc-900">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
            {t.auth.resetPassword}
          </h1>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Enter your email address and we'll send you a link to reset your password.
          </p>
        </div>
        
        <form className="mt-8 space-y-6" action={resetPassword}>
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
          
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
          >
            Send Reset Link
          </button>
          
          <div className="text-center">
            <a href="/auth/signin" className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400">
              Back to sign in
            </a>
          </div>
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
