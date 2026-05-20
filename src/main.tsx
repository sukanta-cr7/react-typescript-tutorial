import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './React_Router/Layout.tsx'
import Home from './React_Router/Home.tsx'
import About from './React_Router/About.tsx'
import Contact from './React_Router/Contact.tsx'
import User from './React_Router/User.tsx'
import Github from './React_Router/Github.tsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout />,
//     children : [
//       {
//         path: '',
//         element : <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:UserId' element={<User />} />
      <Route path='github' element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router}/>
  </React.StrictMode>,
)
