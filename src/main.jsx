import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom' 
import Projeto1 from './pages/projeto1.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path:"/projeto1",
      element:<Projeto1 />
    },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
