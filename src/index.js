import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './component/App'
import { TodoProvider } from './provider/Provider'
import { Toaster } from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <TodoProvider>
      <Toaster />
      <App />
    </TodoProvider>
  </React.StrictMode>
)
