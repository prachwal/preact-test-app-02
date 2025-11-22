import { render } from 'preact'
import { LocationProvider, Router, Route } from 'preact-iso'
import './index.css'
import { Home } from './routes/home.tsx'
import { About } from './routes/about.tsx'

function App() {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </LocationProvider>
  )
}

render(<App />, document.getElementById('app')!)
