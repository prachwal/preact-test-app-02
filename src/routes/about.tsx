import { memo } from 'preact/compat'

export const About = memo(() => (
  <div class="page-about">
    <div class="hero-section">
      <h1>
        <span class="gradient-text">About This Project</span>
      </h1>
      <p class="hero-subtitle">Built with modern web technologies</p>
    </div>

    <div class="content-section">
      <div class="card">
        <h2>🛠️ Tech Stack</h2>
        <ul class="tech-list">
          <li><strong>Preact</strong> - Fast 3kB alternative to React</li>
          <li><strong>Preact Signals</strong> - Reactive state management</li>
          <li><strong>Preact ISO</strong> - Isomorphic routing</li>
          <li><strong>Vite</strong> - Next generation frontend tooling</li>
          <li><strong>TypeScript</strong> - Type-safe JavaScript</li>
        </ul>
      </div>

      <div class="card">
        <h2>📦 Features</h2>
        <div class="features-list">
          <div class="feature-item">
            <span class="feature-bullet">✓</span>
            <div>
              <strong>Fast Refresh</strong>
              <p>Instant feedback during development</p>
            </div>
          </div>
          <div class="feature-item">
            <span class="feature-bullet">✓</span>
            <div>
              <strong>TypeScript Support</strong>
              <p>Full type safety and IntelliSense</p>
            </div>
          </div>
          <div class="feature-item">
            <span class="feature-bullet">✓</span>
            <div>
              <strong>Optimized Build</strong>
              <p>Production-ready with code splitting</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card info-card">
        <h2>💡 Getting Started</h2>
        <p>This project demonstrates best practices for building modern web applications with Preact.</p>
        <div class="code-block">
          <code>npm install</code>
          <code>npm run dev</code>
        </div>
      </div>
    </div>
  </div>
))
