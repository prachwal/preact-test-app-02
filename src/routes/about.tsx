import { useLocation } from 'preact-iso'
import { buildPath } from '../utils'

export function About() {
  console.log('Rendering About component')
  const { route } = useLocation()
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page using Preact with signals and preact-iso router.</p>
      <nav>
        <button onClick={() => route(buildPath('/'))}>Home</button> | <button onClick={() => route(buildPath('/about'))}>About</button>
      </nav>
    </div>
  )
}