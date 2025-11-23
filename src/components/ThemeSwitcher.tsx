import { memo } from 'preact/compat'
import { useTheme, type Theme } from '../hooks/useTheme'

export const ThemeSwitcher = memo(() => {
  const { theme, setTheme } = useTheme()

  const themes: { value: Theme; icon: string; label: string }[] = [
    { value: 'light', icon: '☀️', label: 'Light' },
    { value: 'dark', icon: '🌙', label: 'Dark' },
    { value: 'system', icon: '💻', label: 'System' },
  ]

  return (
    <div class="theme-switcher">
      <span class="theme-label">Theme:</span>
      <div class="theme-options">
        {themes.map(({ value, icon, label }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            class={`theme-btn ${theme === value ? 'active' : ''}`}
            aria-label={`Switch to ${label} theme`}
            title={label}
          >
            <span class="theme-icon">{icon}</span>
            <span class="theme-text">{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
})