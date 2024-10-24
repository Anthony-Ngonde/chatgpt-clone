import React, { useEffect } from 'react'
import './DashboardLayout.css'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import ChatList from '../../components/ChatList'

const DashboardLayout = () => {

  const {userId, isLoaded} = useAuth()

  const navigate = useNavigate()

  useEffect(()=>{
    if(isLoaded && !userId){
        navigate("/sign-in")
    }
  }, [isLoaded, userId, navigate]);

    if(!isLoaded) return "Loading...";

  return (
    <div>
        <div className="menu"><ChatList/></div>
        <div className="content">
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout