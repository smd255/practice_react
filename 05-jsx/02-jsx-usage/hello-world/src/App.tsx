// import { useState } from 'react'

function App() {
  const name = "Party";
  const greet = (name:string) => <p>Hello, {name || "Guest"}</p>;

  return (
    <div>{greet(name)}</div>
  )
}

export default App
