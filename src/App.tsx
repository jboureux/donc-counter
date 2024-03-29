import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const handleSpace = (e: KeyboardEvent) => {
        if(e.key === " ") {
          console.log("space")
            setCount(count+1);
        }
    }

    document.addEventListener("keydown", handleSpace);

    return () => {
        document.removeEventListener("keydown", handleSpace);
    }
}, [count])

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
