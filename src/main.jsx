import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import { PersistGate } from 'redux-persist/es/integration/react'
import store from './store/index.js'

import persistor from "./store/index.js"
import { Provider } from 'react-redux'
import { ConfigProvider, theme } from 'antd'

const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ConfigProvider

      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#3b82f6',
          colorBgElevated: '#020817',
          colorBgContainer: '#020817',
        },
      }}
    >
      <BrowserRouter>
        <PersistGate persistor={persistor} />
        <Provider store={store}>
          <StrictMode>
            <Toaster />
            <App />
          </StrictMode>
        </Provider>
      </BrowserRouter>
    </ConfigProvider>
  </QueryClientProvider>,
)
