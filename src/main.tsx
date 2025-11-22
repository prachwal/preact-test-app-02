import { render } from 'preact'
import { LocationProvider, Router, Route, ErrorBoundary, useLocation } from 'preact-iso'
import './index.css'
import { Home } from './routes/home.tsx'
import { About } from './routes/about.tsx'

const BASE_PATH = import.meta.env.VITE_BASE_PATH || '/'
const SCOPE = BASE_PATH.replace(/\/$/, '') // Usuwa końcowy slash

// Funkcja do budowy ścieżek tras
const buildPath = (relativePath: string) => `${SCOPE}${relativePath}`

const Default = () => {
    const { path } = useLocation()
    console.log('Default route, current path:', path)
    return <div>Default Route</div>
}

function App() {

    console.log('Rendering App component')
    console.log('App component rendered with scope:', SCOPE)

    return (
        <LocationProvider scope={SCOPE}> {/* <-- Tutaj musi być scope! */}
            <ErrorBoundary onError={(error) => console.log('ErrorBoundary caught error:', error)}>
                <Router>
                    <Route path={buildPath('/')} component={Home} />
                    <Route path={buildPath('/about')} component={About} />
                    <Route default component={Default} />
                </Router>


            </ErrorBoundary>
        </LocationProvider>
    )
}

render(<App />, document.getElementById('app')!)
