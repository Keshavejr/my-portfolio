import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import 'remixicon/fonts/remixicon.css'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import BrainMRI from './pages/BrainMRI';
import TyreERP from './pages/TyreERP';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// ADD THIS HERE
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      
      

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/brain-mri" element={<BrainMRI />} />
        <Route path="/tyre-erp" element={<TyreERP />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />

    </BrowserRouter>

  </StrictMode>,
)