import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Store from './Redux/reducer/Store.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider  store={Store}>
       <App />
       </Provider>
  
  </React.StrictMode>,
)




