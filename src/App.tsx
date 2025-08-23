import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DiscardConfirmation from './components/DiscardConfirmation'
import NewProfileForm from './components/NewProfileForm'

function App() {
  const [count, setCount] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [showForm, setShowForm] = useState(true)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      {showForm && (
        <NewProfileForm 
          onDiscard={() => setShowModal(true)}
          onCreate={(data) => {
            console.log('Profile created:', data);
            setShowForm(false);
          }}
        />
      )}
      
      {showModal && (
        <DiscardConfirmation 
          onCancel={() => setShowModal(false)}
          onConfirm={() => {
            console.log('Confirmed - Discarding...')
            setShowModal(false)
            setShowForm(false)
          }}
        />
      )}
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setShowModal(true)} style={{marginLeft: '10px'}}>
          Show Modal
        </button>
        <button onClick={() => setShowForm(true)} style={{marginLeft: '10px'}}>
          Show Form
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
