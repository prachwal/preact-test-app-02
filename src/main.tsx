import { render } from 'preact'
import { LocationProvider, Router, Route, ErrorBoundary, useLocation } from 'preact-iso'
import './index.css'
import { Home } from './routes/home.tsx'
import { About } from './routes/about.tsx'

const BASE_PATH = import.meta.env.VITE_BASE_PATH || '/'
const SCOPE = BASE_PATH.replace(/\/$/, '')  // Remove trailing slash for scope
console.log('BASE_PATH:', BASE_PATH)
console.log('SCOPE:', SCOPE)

const Default = () => {
  const { path } = useLocation()
  console.log('Default route, current path:', path)
  return <div>Default Route</div>
}

function App() {
  console.log('Rendering App')
  return (
    <LocationProvider>
      <ErrorBoundary onError={(error) => console.log('ErrorBoundary caught error:', error)}>
        <Router
          onRouteChange={(url) => console.log('Route changed to:', url)}
          onLoadStart={(url) => console.log('Load start:', url)}
          onLoadEnd={(url) => console.log('Load end:', url)}
        >
          <Route path={`${SCOPE}/`} component={Home} />
          <Route path={`${SCOPE}/about`} component={About} />
          <Route default component={Default} />
        </Router>
      </ErrorBoundary>
    </LocationProvider>
  )
}

render(<App />, document.getElementById('app')!)
