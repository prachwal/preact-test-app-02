import { memo } from 'preact/compat'
import { useSignal } from '@preact/signals'
import '../app.css'

export const Home = memo(() => {
  const count = useSignal(0)
  const increment = () => count.value++
  const decrement = () => count.value > 0 && count.value--
  const reset = () => count.value = 0

  return (
    <div class="page-home">
      <div class="hero-section">
        <h1>
          <span class="gradient-text">Welcome to Preact</span>
        </h1>
        <p class="hero-subtitle">Fast 3kB alternative to React with the same modern API</p>
      </div>

      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value">{count.value}</div>
          <div class="stat-label">Current Count</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">⚡</div>
          <div class="stat-label">Lightning Fast</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">3kB</div>
          <div class="stat-label">Bundle Size</div>
        </div>
      </div>

      <div class="card interactive-card">
        <h2>Interactive Counter</h2>
        <div class="counter-display">
          <span class="counter-number">{count.value}</span>
        </div>
        <div class="button-group">
          <button onClick={decrement} class="btn-secondary" disabled={count.value === 0}>
            <span>−</span>
          </button>
          <button onClick={increment} class="btn-primary">
            <span>+</span>
          </button>
          <button onClick={reset} class="btn-outline" disabled={count.value === 0}>
            <span>Reset</span>
          </button>
        </div>
        <p class="card-hint">
          Edit <code>src/routes/home.tsx</code> and save to test HMR
        </p>
      </div>

      <div class="features-section">
        <h2>Why Preact?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🚀</div>
            <h3>Blazing Fast</h3>
            <p>Optimized for performance with a tiny footprint</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">⚛️</div>
            <h3>React Compatible</h3>
            <p>Use the same API you know and love</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Modern</h3>
            <p>Hooks, Fragments, Context and more</p>
          </div>
        </div>
      </div>

      <div class="cta-section">
        <p>
          Check out{' '}
          <a
            href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
            target="_blank"
            rel="noopener noreferrer"
            class="link-primary"
          >
            create-preact
          </a>
          , the official Preact + Vite starter
        </p>
      </div>
    </div>
  )
})
