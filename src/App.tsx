import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DiscardConfirmation from './components/DiscardConfirmation'
import NewProfileForm from './components/NewProfileForm'
import EmployeeTable from './components/EmployeeTable'
import SearchBoxNew from './components/SearchBoxNew'
import FilterComponent from './components/FilterComponent'

function App() {
  const [activeComponent, setActiveComponent] = useState<string>('')
  const [showForm, setShowForm] = useState(false) // Đã đặt là false rồi

  const components = [
    {
      id: 'filter',
      name: 'Filter Component',
      description: 'Advanced filter dialog with multiple selection options',
      component: (
        <div style={{ width: '500px', height: '600px', overflow: 'hidden' }}>
          <FilterComponent 
            onFilter={(filters) => console.log('Filters applied:', filters)}
            onCancel={() => console.log('Filter canceled')}
          />
        </div>
      )
    },
    {
      id: 'searchbox',
      name: 'SearchBox Component',
      description: 'Search input with custom styling and search icon',
      component: (
        <SearchBoxNew 
          onSearch={(value) => console.log('Search:', value)}
          onChange={(value) => console.log('Input changed:', value)}
          placeholder="Search by Name, ID or Email"
          style={{ width: '100%', maxWidth: '400px' }}
        />
      )
    },
    {
      id: 'form',
      name: 'New Profile Form',
      description: 'Form component for creating new user profiles',
      component: (
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <button
            onClick={() => alert('This would show the actual form in a real application')}
            style={{
              background: '#007bff',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Open New Profile Form
          </button>
          <div style={{ marginTop: '20px', color: '#666', fontSize: '14px' }}>
            Note: The actual form is not shown here to avoid UI conflicts.
            In a real application, clicking this button would open the form.
          </div>
        </div>
      )
    },
    {
      id: 'table',
      name: 'Employee Table',
      description: 'Data table component for displaying employee information',
      component: <EmployeeTable />
    },
    {
      id: 'modal',
      name: 'Discard Confirmation Modal',
      description: 'Modal dialog for confirming discard actions',
      component: (
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <button
            onClick={() => alert('This would show the actual modal in a real application')}
            style={{
              background: '#007bff',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Show Discard Confirmation Modal
          </button>
          <div style={{ marginTop: '20px', color: '#666', fontSize: '14px' }}>
            Note: The actual modal is not shown here to avoid UI conflicts.
            In a real application, clicking this button would open the modal.
          </div>
        </div>
      )
    }
  ]

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {showForm && (
        <NewProfileForm 
          onDiscard={() => setShowForm(false)}
          onCreate={(data) => {
            console.log('Profile created:', data);
            setShowForm(false);
          }}
        />
      )}

      {/* Header */}
      <div style={{ 
        background: 'white', 
        padding: '20px', 
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '30px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Component Library</h1>
          <p style={{ color: '#666', fontSize: '16px' }}>
            Showcase of all React TypeScript components
          </p>
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={() => setShowForm(true)}
              style={{
                background: '#007bff',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                marginRight: '10px'
              }}
            >
              Show Form
            </button>
            <button
              onClick={() => setActiveComponent('filter')}
              style={{
                background: '#28a745',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                marginRight: '10px'
              }}
            >
              View Filter Component
            </button>
            <button
              onClick={() => setActiveComponent('searchbox')}
              style={{
                background: '#6c757d',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              View SearchBox
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Component List */}
        {!activeComponent && (
          <div>
            <h2 style={{ marginBottom: '30px', color: '#333' }}>Available Components</h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '20px' 
            }}>
              {components.map((comp) => (
                <div 
                  key={comp.id}
                  style={{
                    background: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                  onClick={() => setActiveComponent(comp.id)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                >
                  <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{comp.name}</h3>
                  <p style={{ margin: '0', color: '#666', fontSize: '14px' }}>{comp.description}</p>
                  <div style={{ 
                    marginTop: '15px', 
                    color: '#007bff', 
                    fontSize: '14px', 
                    fontWeight: 'bold' 
                  }}>
                    Click to preview →
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Component Preview */}
        {activeComponent && (
          <div>
            <div style={{ marginBottom: '20px' }}>
              <button 
                onClick={() => setActiveComponent('')}
                style={{
                  background: '#007bff',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                ← Back to Components
        </button>
            </div>
            
            {components
              .filter(comp => comp.id === activeComponent)
              .map(comp => (
                <div key={comp.id}>
                  <div style={{ 
                    background: 'white', 
                    padding: '20px', 
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0',
                    marginBottom: '20px'
                  }}>
                    <h2 style={{ margin: '0 0 10px 0', color: '#333' }}>{comp.name}</h2>
                    <p style={{ margin: '0 0 20px 0', color: '#666' }}>{comp.description}</p>
                  </div>
                  
                  <div style={{ 
                    background: 'white', 
                    padding: '40px', 
                    borderRadius: '8px',
                    border: '1px solid #e0e0e0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '200px'
                  }}>
                    {comp.component}
                  </div>
                </div>
              ))
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default App
