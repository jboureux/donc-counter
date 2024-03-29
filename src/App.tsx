import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Compte les donc</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          il y a {count} donc(s)
        </button>
      </div>
    </>
  )
}

export default App
