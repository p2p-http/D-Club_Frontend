import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { PersistGate } from 'redux-persist/es/integration/react'

import persistor from "./store/index.js"

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <PersistGate persistor={persistor} />
      <StrictMode>
        <Toaster />
        <App />
      </StrictMode>
    </BrowserRouter>
  </QueryClientProvider>,
)
