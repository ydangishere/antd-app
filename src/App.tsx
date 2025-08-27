import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DiscardConfirmation from './components/DiscardConfirmation'
import NewProfileForm from './components/NewProfileForm'
import EmployeeTable from './components/EmployeeTable'
import SearchBoxNew from './components/SearchBoxNew'
import FilterComponent from './components/FilterComponent'
import CustomTabs from './components/CustomTabs'
import EmployeeTableNew from './components/EmployeeTableNew'
import EmployeeMultiSelectTable from './components/EmployeeMultiSelectTable'

function App() {
  const [activeComponent, setActiveComponent] = useState<string>('')
  const [showForm, setShowForm] = useState(false) // Đã đặt là false rồi
  const [showDiscardModal, setShowDiscardModal] = useState(false)

  // Simple hash router to support deep links like #/filter
  useEffect(() => {
    const normalizeHashToId = (hash: string): string => hash.replace(/^#\/?/, '')
    const initialId = normalizeHashToId(window.location.hash)
    if (initialId) {
      setActiveComponent(initialId)
    }
    const handleHashChange = () => {
      const idFromHash = normalizeHashToId(window.location.hash)
      setActiveComponent(idFromHash)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigateTo = (id: string) => {
    setActiveComponent(id)
    window.location.hash = id ? `/${id}` : '/'
  }

  const components = [
    {
      id: 'filter',
      name: 'Filter Component',
      description: 'Advanced filter dialog with multiple selection options',
      component: (
        <div style={{ width: '650px', height: '753px', overflow: 'auto', margin: '0 auto', position: 'relative', paddingTop: '20px' }}>
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
        <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
          <NewProfileForm 
            onDiscard={() => console.log('Form discarded')}
            onCreate={(data) => {
              console.log('Profile created:', data);
              alert('Profile created successfully!');
            }}
          />
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
        <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
          <button
            onClick={() => setShowDiscardModal(true)}
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
            Click the button above to see the actual discard confirmation modal.
          </div>
          
          {showDiscardModal && (
            <DiscardConfirmation 
              onCancel={() => {
                console.log('Discard cancelled');
                setShowDiscardModal(false);
              }}
              onConfirm={() => {
                console.log('Discard confirmed');
                setShowDiscardModal(false);
                alert('Action discarded successfully!');
              }}
            />
          )}
        </div>
      )
    },
    {
      id: 'tabs',
      name: 'Custom Tabs',
      description: 'Ant Design tabs with custom styling matching the design specifications',
      component: (
        <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
          <CustomTabs />
        </div>
      )
    },
    {
      id: 'employeetablenew',
      name: 'Employee Table New',
      description: 'Ant Design table with exact design match from specifications',
      component: (
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          <EmployeeTableNew />
        </div>
      )
    },
    {
      id: 'multiselecttable',
      name: 'Employee Multi-Select Table',
      description: 'Table with Multi-Select functionality that can be toggled on and off',
      component: (
        <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
          <EmployeeMultiSelectTable />
        </div>
      )
    },

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
        padding: '10px', 
        borderBottom: '1px solid #e0e0e0',
        marginBottom: '0'
      }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', textAlign: 'center' }}>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" style={{ width: '24px', height: '24px' }} />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" style={{ width: '24px', height: '24px' }} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 40px' }}>
        
        {/* Component List */}
        {!activeComponent && (
          <div>
            <h2 style={{ marginTop: '10px', marginBottom: '20px', color: '#333' }}>Available Components</h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: '30px',
              maxWidth: '1400px',
              margin: '0 auto'
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
