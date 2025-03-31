import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {

  let router = createBrowserRouter(
    [
      {
        path: "/",
        element : <Layout />,
        children : [
          {
            path : "/",
            element : <Home />
          },
          {
            path : "/about",
            element : <About />
          },
          {
            path : "/contact",
            element : <Contact />
          }
        ]
      }
    ]
  )

  return <RouterProvider router={router}/>
}

export default App
