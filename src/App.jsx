import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {About, Home, Homelayout, Project, Skills, Units, Waste} from '../src/pages/indexpage.js'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element :<Home/>,
      errorElement: <div>404</div>,
      children: [
        {
          index: true,  
          element: <Homelayout/>,
          errorElement: <div>404</div>,      
        },
        {
          path: '/about',
          element: <About/>,
          errorElement: <div>404</div>,
         },
         {
           path: '/skills',
           element: <Skills/>,
           errorElement: <div>404</div>,    
         },
         {
           path: '/project',
           element: <Project/>,
           errorElement: <div>404</div>,
          },
          {
            path: '/works',
            element: <Units/>,
            errorElement: <div>404</div>,    
          },
          {
            path: '/waste',
            element: <Waste/>,
            errorElement: <div>404</div>,    
          },
          {
            path: '/waste',
            element: <Units/>,
            errorElement: <div>404</div>,    
          }
      ]    
    },
    
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App