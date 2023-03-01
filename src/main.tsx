import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";

import { UseIt } from './pages/UseIt'
import MainPage from './pages/MainPage'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <UseIt/>
  </React.StrictMode>,
)
