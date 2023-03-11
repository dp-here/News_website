import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './css/Navbar.css'
export default function NavBar() {
  return (
    <>
      <nav className='navg'>
        <ul >
          <li >
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}
