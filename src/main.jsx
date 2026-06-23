import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom' 
import Projeto1 from './pages/Projeto1.jsx'
import Projeto2 from './pages/Projeto2.jsx'
import Projeto3 from './pages/Projeto3.jsx'
import Projeto4 from './pages/Projeto4.jsx'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path:"/projeto1",
      element:<Projeto1 />
    },
    {
      path:"/projeto2",
      element:<Projeto2 />
    },
    {
      path:"/projeto3",
      element:<Projeto3 />
    },
    {
      path:"/projeto4",
      element:<Projeto4 />
    }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
