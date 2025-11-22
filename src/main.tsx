import { render } from 'preact'
import { LocationProvider, Router, Route } from 'preact-iso'
import './index.css'
import { Home } from './routes/home.tsx'
import { About } from './routes/about.tsx'
import { BASE_PATH } from './config'

function App() {
  return (
    <LocationProvider scope={BASE_PATH}>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
      </Router>
    </LocationProvider>
  )
}

render(<App />, document.getElementById('app')!)
