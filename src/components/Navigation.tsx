import { buildPath } from '../utils'

export function Navigation() {
  return (
    <nav>
      <a href={buildPath('/')}>Home</a> | <a href={buildPath('/about')}>About</a>
    </nav>
  )
}