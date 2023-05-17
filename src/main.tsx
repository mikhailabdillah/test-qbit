import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from '@/routes/root'
import LoginPage from '@/routes/login'
import AboutPage from '@/routes/about'
import PostingPage from '@/routes/posting'
import { Provider } from 'react-redux'
import store, { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'
import { ChakraBaseProvider } from '@chakra-ui/react'
import theme from './theme'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    index: true,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/posting',
    element: <PostingPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraBaseProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </ChakraBaseProvider>
    </Provider>
  </React.StrictMode>
)
