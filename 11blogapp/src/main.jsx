import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Provider } from 'react-redux'
import store from "./store/store.js"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Protected from "./components/AuthLayout.jsx"
import Signup from "./pages/Signup.jsx"
import AllPosts from "./pages/AllPosts.jsx"
import AddPost from "./pages/AddPost.jsx"
import EditPost from "./pages/EditPost.jsx"
import Post from "./pages/Posts.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
      path:"/login",
      element: (
        <Protected authentification={false}>
          <Login />
        </Protected>
      )
      },
      {
        path:"/signup",
        element: (
          <Protected authentification={false}>
            <Signup />
          </Protected>
        )
        },
        {
          path:"/allposts",
          element: (
            <Protected authentification={true}>
              <AllPosts />
            </Protected>
          )
          },
          {
            path:"/addpost",
            element: (
              <Protected authentification={true}>
                <AddPost />
              </Protected>
            )
            },  
            
            {
              path:"/edit-post/:slug",
              element: (
                <Protected authentification={true}>
                  <EditPost />
                </Protected>
              )
            },

            {
              path:"/post/:slug",
              element: (
                <Protected authentification={true}>
                  <Post />
                </Protected>
              )
            }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
