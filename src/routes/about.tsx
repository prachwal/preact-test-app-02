export function About() {
  console.log('Rendering About component')
  return (
    <div>
      <h1>About</h1>
      <p>This is the about page using Preact with signals and preact-iso router.</p>
      <nav>
        <a href="./">Home</a> | <a href="./about">About</a>
      </nav>
    </div>
  )
}