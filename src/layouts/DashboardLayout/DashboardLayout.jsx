import React from 'react'
import './DashboardLayout.css'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <div>
        <div className="menu">MENU</div>
        <div className="content">
            <Outlet />
        </div>
    </div>
  )
}

export default DashboardLayout