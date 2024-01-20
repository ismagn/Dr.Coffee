import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { DrCoffeeProvider } from './context/DrCoffeeProvider';
import router from './router';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <DrCoffeeProvider> 
        <RouterProvider router={router} />
      </DrCoffeeProvider> 
  </React.StrictMode>,
)
