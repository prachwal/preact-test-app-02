import { signal } from '@preact/signals'
import preactLogo from '../assets/preact.svg'
import viteLogo from '/vite.svg'
import '../app.css'

export function Home() {
  const count = signal(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <button onClick={() => count.value += 1}>
          count is {count.value}
        </button>
        <p>
          Edit <code>src/routes/home.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{' '}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
      <nav>
        <a href="/">Home</a> | <a href="/about">About</a>
      </nav>
    </>
  )
}