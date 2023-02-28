import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";

import App from './pages/App'
import { UseIt } from './pages/UseIt' 


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <UseIt/>
  </React.StrictMode>,
)
