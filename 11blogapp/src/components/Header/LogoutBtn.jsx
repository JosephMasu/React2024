import React from 'react'
import {useDispatch} from "react-redux"
import authService from "../../appwrite/auth.js"
import {logout} from "../../store/authSlice.js"

function LogoutBtn() {

const disaptch = useDispatch()
const logouthanler = () =>{
    authService.logout().then(() =>{
        disaptch(logout())
    })
}

  return (
    <button
    className='inline-bock px-6 py-2 
    duration-200 hover:bg-blue-100 
    rounded-full'
    onClick={logouthanler}>Logout</button>
  )
}

export default LogoutBtn