import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route ,RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import AboutUs from './components/AboutUs.jsx'
import Gallery from './components/Gallery.jsx'
// import Careers from './components/Careers.jsx'
import Contact from './components/contact.jsx'

const router = createBrowserRouter(
   createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path=''  element={<Home />}/>
      <Route path='about'  element={<AboutUs />}/>
      <Route path='gallery'  element={<Gallery />}/>
      {/* <Route path='careers'  element={<Careers />}/> */}
      <Route path='contact'  element={<Contact />}/>

    </Route>
   )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
