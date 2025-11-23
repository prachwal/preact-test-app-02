import { memo } from 'preact/compat'
import { Navigation } from './Navigation'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Layout = memo(({ children }: { children: preact.ComponentChildren }) => (
  <div class="layout">
    <header>
      <div class="header-content">
        <h1>
          <span class="logo-icon">⚡</span>
          Preact Test App 02
        </h1>
        <div class="header-right">
          <ThemeSwitcher />
          <div class="header-badge">v0.0.1</div>
        </div>
      </div>
    </header>
    <aside>
      <div class="sidebar-header">
        <h2>Navigation</h2>
      </div>
      <Navigation />
      <div class="sidebar-footer">
        <div class="status-indicator">
          <span class="status-dot"></span>
          <span class="status-text">All systems operational</span>
        </div>
      </div>
    </aside>
    <main>
      <div class="main-content">
        {children}
      </div>
    </main>
    <footer>
      <div class="footer-content">
        <p>© 2024 Preact Test App 02</p>
        <div class="footer-links">
          <a href="https://preactjs.com" target="_blank" rel="noopener noreferrer">Docs</a>
          <span class="separator">•</span>
          <a href="https://github.com/preactjs/preact" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span class="separator">•</span>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Support coming soon!') }}>Support</a>
        </div>
      </div>
    </footer>
  </div>
))
