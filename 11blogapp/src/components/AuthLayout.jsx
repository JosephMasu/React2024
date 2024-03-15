import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({children, authentification = true}) {

    const authStatus = useSelector((state) => state.auth.
    status)

    const navigate = useNavigate()
    const [loader, selectLoader] = useState(true)

    useEffect(() => {
        if(authentification && authStatus !== 
            authentification){
                navigate("/login")
            }else if (!authentification && authStatus !==
                authentification){
                    navigate("/")
                }
                selectLoader(false)

    }, [authStatus, authentification, navigate])
    return loader ? null : <>{children}</>

}

export default Protected