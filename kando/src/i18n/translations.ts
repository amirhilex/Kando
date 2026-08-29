export type Locale = 'en' | 'fa'

export interface Translation {
  common: {
    loading: string
    error: string
    save: string
    cancel: string
    delete: string
    edit: string
    create: string
    search: string
    noResults: string
    confirm: string
    back: string
    next: string
    previous: string
    close: string
    settings: string
    profile: string
    logout: string
    login: string
    signup: string
    email: string
    password: string
    fullName: string
    required: string
    invalidEmail: string
  }
  auth: {
    signIn: string
    signUp: string
    signOut: string
    forgotPassword: string
    resetPassword: string
    noAccount: string
    hasAccount: string
    verificationSent: string
    invalidCredentials: string
  }
  workspace: {
    workspaces: string
    createWorkspace: string
    switchWorkspace: string
    members: string
    inviteMembers: string
    settings: string
  }
  navigation: {
    dashboard: string
    projects: string
    tasks: string
    calendar: string
    knowledge: string
    files: string
    reports: string
    automation: string
  }
}

export const translations: Record<Locale, Translation> = {
  en: {
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      create: 'Create',
      search: 'Search',
      noResults: 'No results found',
      confirm: 'Confirm',
      back: 'Back',
      next: 'Next',
      previous: 'Previous',
      close: 'Close',
      settings: 'Settings',
      profile: 'Profile',
      logout: 'Logout',
      login: 'Login',
      signup: 'Sign Up',
      email: 'Email',
      password: 'Password',
      fullName: 'Full Name',
      required: 'This field is required',
      invalidEmail: 'Invalid email address',
    },
    auth: {
      signIn: 'Sign In',
      signUp: 'Sign Up',
      signOut: 'Sign Out',
      forgotPassword: 'Forgot Password?',
      resetPassword: 'Reset Password',
      noAccount: "Don't have an account?",
      hasAccount: 'Already have an account?',
      verificationSent: 'Verification email sent',
      invalidCredentials: 'Invalid email or password',
    },
    workspace: {
      workspaces: 'Workspaces',
      createWorkspace: 'Create Workspace',
      switchWorkspace: 'Switch Workspace',
      members: 'Members',
      inviteMembers: 'Invite Members',
      settings: 'Workspace Settings',
    },
    navigation: {
      dashboard: 'Dashboard',
      projects: 'Projects',
      tasks: 'Tasks',
      calendar: 'Calendar',
      knowledge: 'Knowledge',
      files: 'Files',
      reports: 'Reports',
      automation: 'Automation',
    },
  },
  fa: {
    common: {
      loading: 'در حال بارگذاری...',
      error: 'خطایی رخ داد',
      save: 'ذخیره',
      cancel: 'لغو',
      delete: 'حذف',
      edit: 'ویرایش',
      create: 'ایجاد',
      search: 'جستجو',
      noResults: 'نتیجه‌ای یافت نشد',
      confirm: 'تأیید',
      back: 'بازگشت',
      next: 'بعدی',
      previous: 'قبلی',
      close: 'بستن',
      settings: 'تنظیمات',
      profile: 'پروفایل',
      logout: 'خروج',
      login: 'ورود',
      signup: 'ثبت‌نام',
      email: 'ایمیل',
      password: 'رمز عبور',
      fullName: 'نام کامل',
      required: 'این فیلد الزامی است',
      invalidEmail: 'ایمیل نامعتبر است',
    },
    auth: {
      signIn: 'ورود',
      signUp: 'ثبت‌نام',
      signOut: 'خروج',
      forgotPassword: 'فراموشی رمز عبور؟',
      resetPassword: 'بازیابی رمز عبور',
      noAccount: 'حساب کاربری ندارید؟',
      hasAccount: 'قبلاً ثبت‌نام کرده‌اید؟',
      verificationSent: 'ایمیل تأیید ارسال شد',
      invalidCredentials: 'ایمیل یا رمز عبور نامعتبر است',
    },
    workspace: {
      workspaces: 'فضاهای کاری',
      createWorkspace: 'ایجاد فضای کاری',
      switchWorkspace: 'تغییر فضای کاری',
      members: 'اعضا',
      inviteMembers: 'دعوت از اعضا',
      settings: 'تنظیمات فضای کاری',
    },
    navigation: {
      dashboard: 'داشبورد',
      projects: 'پروژه‌ها',
      tasks: 'وظایف',
      calendar: 'تقویم',
      knowledge: 'دانش',
      files: 'فایل‌ها',
      reports: 'گزارش‌ها',
      automation: 'اتوماسیون',
    },
  },
}

export const getDirection = (locale: Locale): 'rtl' | 'ltr' => {
  return locale === 'fa' ? 'rtl' : 'ltr'
}

export const getLanguageName = (locale: Locale): string => {
  return locale === 'fa' ? 'فارسی' : 'English'
}
