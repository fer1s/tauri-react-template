import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import AppBar from './components/AppBar'

import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <AppBar />
      <div className="App">
         <App />
      </div>
   </React.StrictMode>
)
