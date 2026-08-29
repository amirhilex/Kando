import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { Locale } from '@/i18n'

interface AppState {
  // Language & Theme
  locale: Locale
  theme: 'light' | 'dark' | 'system'
  
  // Workspace
  activeWorkspaceId: string | null
  
  // UI State
  sidebarCollapsed: boolean
  mobileMenuOpen: boolean
  
  // Actions
  setLocale: (locale: Locale) => void
  setTheme: (theme: 'light' | 'dark' | 'system') => void
  setActiveWorkspaceId: (id: string | null) => void
  toggleSidebar: () => void
  setMobileMenuOpen: (open: boolean) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Initial state
      locale: 'en',
      theme: 'system',
      activeWorkspaceId: null,
      sidebarCollapsed: false,
      mobileMenuOpen: false,
      
      // Actions
      setLocale: (locale) => set({ locale }),
      setTheme: (theme) => set({ theme }),
      setActiveWorkspaceId: (id) => set({ activeWorkspaceId: id }),
      toggleSidebar: () => set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
    }),
    {
      name: 'kando-app-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        locale: state.locale,
        theme: state.theme,
        activeWorkspaceId: state.activeWorkspaceId,
        sidebarCollapsed: state.sidebarCollapsed,
      }),
    }
  )
)
