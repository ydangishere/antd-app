import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DiscardConfirmation from './components/DiscardConfirmation'
import NewProfileForm from './components/NewProfileForm'
import EmployeeTable from './components/EmployeeTable'
import SearchBoxAntD from './components/SearchBoxAntD'

function App() {
  const [count, setCount] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [showForm, setShowForm] = useState(true)
  const [showTable, setShowTable] = useState(false)
  const [showSearchBox, setShowSearchBox] = useState(false)

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
      
      {showSearchBox && (
        <div style={{ maxWidth: '500px', margin: '20px auto', padding: '0 20px' }}>
          <h3>Search Box</h3>
          <SearchBoxAntD 
            onSearch={(value) => console.log('Search:', value)}
            placeholder="Search by Name, ID or Email"
            style={{ width: '100%' }}
          />
        </div>
      )}
      
      {showForm && (
        <NewProfileForm 
          onDiscard={() => setShowForm(false)}
          onCreate={(data) => {
            console.log('Profile created:', data);
            setShowForm(false);
          }}
        />
      )}

      {showTable && <EmployeeTable />}
      
      {showModal && (
        <DiscardConfirmation 
          onCancel={() => setShowModal(false)}
          onConfirm={() => setShowModal(false)}
        />
      )}
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => setShowModal(true)} style={{marginLeft: '10px'}}>
          Preview Discard Modal
        </button>
        <button onClick={() => setShowForm(true)} style={{marginLeft: '10px'}}>
          Show Form
        </button>
        <button onClick={() => setShowTable((v) => !v)} style={{marginLeft: '10px'}}>
          {showTable ? 'Hide Employee Table' : 'Preview Employee Table'}
        </button>
        <button onClick={() => setShowSearchBox((v) => !v)} style={{marginLeft: '10px'}}>
          {showSearchBox ? 'Hide Search Box' : 'Preview Search Box'}
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
