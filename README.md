# Antd App - React Components Library

A modern React TypeScript application with reusable UI components, built with Vite and Ant Design.

## 🚀 Features

- ⚛️ **React 18** with TypeScript
- ⚡ **Vite** for fast development
- 🎨 **Ant Design** integration
- 📱 **Responsive** components
- 🧩 **Reusable** component library
- 🔧 **ESLint** configured

## 🏗️ Project Structure

```
antd-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── DiscardConfirmation.tsx
│   │   ├── DiscardConfirmation.css
│   │   └── README.md
│   ├── App.tsx             # Main application
│   └── main.tsx           # Entry point
├── public/
└── package.json
```

## 🎯 Available Components

### DiscardConfirmation Modal
Professional confirmation dialog for discard actions.

**Direct Links:**
- [Component Code](./src/components/DiscardConfirmation.tsx)
- [Styling](./src/components/DiscardConfirmation.css)
- [Documentation](./src/components/README.md)

## 🛠️ Quick Start

### Installation
```bash
git clone https://github.com/ydangishere/antd-app.git
cd antd-app
npm install
```

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Using Components
```tsx
import DiscardConfirmation from './components/DiscardConfirmation';

function MyApp() {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div>
      {showModal && (
        <DiscardConfirmation 
          onCancel={() => setShowModal(false)}
          onConfirm={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
```

## 📦 Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **UI Library:** Ant Design
- **Styling:** CSS Modules
- **Linting:** ESLint

## 🌐 Live Demo

Run `npm run dev` and visit `http://localhost:5173`

## 📄 License

MIT License