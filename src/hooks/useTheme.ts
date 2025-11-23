import { signal, computed, effect } from '@preact/signals'

export type Theme = 'light' | 'dark' | 'system'

const THEME_KEY = 'app-theme'

// Signal dla wybranego motywu
const selectedTheme = signal<Theme>((() => {
  const stored = localStorage.getItem(THEME_KEY) as Theme | null
  return stored || 'system'
})())

// Computed signal dla rzeczywistego motywu (uwzględnia system)
const actualTheme = computed(() => {
  if (selectedTheme.value === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return selectedTheme.value
})

// Nasłuchuj zmian preferencji systemowych
if (typeof window !== 'undefined') {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', () => {
    if (selectedTheme.value === 'system') {
      applyTheme(actualTheme.value)
    }
  })
}

function applyTheme(theme: 'light' | 'dark') {
  document.documentElement.setAttribute('data-theme', theme)
}

// Effect do aplikowania motywu
effect(() => {
  applyTheme(actualTheme.value)
})

export function useTheme() {
  const setTheme = (theme: Theme) => {
    selectedTheme.value = theme
    localStorage.setItem(THEME_KEY, theme)
  }

  return {
    theme: selectedTheme.value,
    actualTheme: actualTheme.value,
    setTheme,
  }
}