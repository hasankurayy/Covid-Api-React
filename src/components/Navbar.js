import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo-mine">
                <a href="/">HKRY</a>
            </div>
            
            <div className="nav-links">
                <NavLink to="/" className={(({isActive}) => isActive ? "active" : "")}>Home</NavLink>
                <NavLink to="/regions" className={(({isActive}) => isActive ? "active": "")}>Regions</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar