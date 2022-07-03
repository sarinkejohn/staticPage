import React from 'react'
import logov from '../images/airbnb-logo.png'

const Header = () => {
  return (
    <header>
        <img src = {logov}  className='header--logo' alt='nav logo'/>
    </header>
        
    
  )
}

export default Header