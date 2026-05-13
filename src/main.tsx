import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './React_Router/Layout.tsx'
import Home from './React_Router/Home.tsx'
import About from './React_Router/About.tsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout />,
    children : [
      {
        path: '',
        element : <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router}/>
  </React.StrictMode>,
)
