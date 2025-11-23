import { memo } from 'preact/compat'
import { PATHS } from '../utils'
import { useActiveLink } from '../hooks/useActiveLink'

const NavLink = memo(({ href, children, icon }: { href: string; children: preact.ComponentChildren; icon?: string }) => {
  const isActive = useActiveLink(href)
  return (
    <a href={href} class={isActive ? 'active' : ''} aria-current={isActive ? 'page' : undefined}>
      {icon && <span class="nav-icon">{icon}</span>}
      <span class="nav-text">{children}</span>
      {isActive && <span class="active-indicator">→</span>}
    </a>
  )
})

export const Navigation = memo(() => (
  <nav aria-label="Main navigation">
    <NavLink href={PATHS.HOME} icon="🏠">Home</NavLink>
    <NavLink href={PATHS.ABOUT} icon="ℹ️">About</NavLink>
  </nav>
))
