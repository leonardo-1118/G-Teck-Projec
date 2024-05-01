import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CreateGlobalStyle from './styles/globalStyle.js'
import Router from './routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <CreateGlobalStyle />
  </React.StrictMode>,
)
