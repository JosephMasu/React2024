import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './component/Home/Home.jsx'
import About from './component/About/About.jsx'
import User from './component/User/User.jsx'
import Github, { githubInfoLoader } from './component/Github/Github.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element = {<Home />}/>
    <Route path="about" element = {<About />}/>
    <Route path="user/" element = {<User />}>
      <Route path=':userid' element={<User />} />
      </Route>
    <Route 
    loader={githubInfoLoader}
    path="github" element = {<Github />}/>   
    <Route path='*' element={<div>Not Found</div>}/> 
  </Route>
)
  )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
