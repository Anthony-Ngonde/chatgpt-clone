import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='homepage'>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  )
}

export default HomePage