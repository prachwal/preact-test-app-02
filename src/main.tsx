import { render } from 'preact'
import { LocationProvider, Router, Route, ErrorBoundary } from 'preact-iso'
import { useEffect } from 'preact/hooks'
import './index.css'
import './app.css'
import { Home } from './routes/home'
import { About } from './routes/about'
import { NotFound } from './routes/NotFound'
import { PATHS, SCOPE } from './utils'
import { Layout } from './components/Layout'

// Initialize theme on load
const initTheme = () => {
  const stored = localStorage.getItem('app-theme') || 'system'
  const theme = stored === 'system' 
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : stored
  document.documentElement.setAttribute('data-theme', theme)
}

initTheme()

function App() {
  useEffect(() => {
    if (window.location.search.startsWith('?/')) {
      const newPath = window.location.pathname + window.location.search.slice(2) + window.location.hash
      window.history.replaceState(null, '', newPath)
    }
  }, [])

  return (
    <LocationProvider scope={SCOPE}>
      <ErrorBoundary>
        <Layout>
          <Router>
            <Route path={PATHS.HOME} component={Home} />
            <Route path={PATHS.ABOUT} component={About} />
            <Route default component={NotFound} />
          </Router>
        </Layout>
      </ErrorBoundary>
    </LocationProvider>
  )
}

render(<App />, document.getElementById('app')!)
