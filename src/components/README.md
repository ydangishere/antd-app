# React Components Library

This folder contains reusable React components built with TypeScript and modern CSS.

## Available Components

### DiscardConfirmation

A professional confirmation modal component for discard actions.

**Features:**
- ✅ TypeScript support
- ✅ Responsive design
- ✅ Ant Design styling
- ✅ Customizable callbacks
- ✅ Hover effects
- ✅ Overlay background

**Usage:**
```tsx
import DiscardConfirmation from './components/DiscardConfirmation';

function MyComponent() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div>
      {showModal && (
        <DiscardConfirmation 
          onCancel={() => setShowModal(false)}
          onConfirm={() => {
            // Your confirm logic here
            console.log('Confirmed!');
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}
```

**Files:**
- `DiscardConfirmation.tsx` - React component
- `DiscardConfirmation.css` - Styling

**Props:**
- `onCancel?: () => void` - Callback when Cancel button is clicked
- `onConfirm?: () => void` - Callback when Yes button is clicked

## Quick Start

1. Copy the component files to your `components/` folder
2. Import the component: `import DiscardConfirmation from './components/DiscardConfirmation'`
3. Use in your JSX: `<DiscardConfirmation onCancel={...} onConfirm={...} />`

## Demo

Live demo available at: `http://localhost:4174/` (when running the development server)
