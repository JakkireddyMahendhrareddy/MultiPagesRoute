import React from 'react'
import {Link} from 'react-router-dom'

import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="inner-container">
        <h1>Mahi</h1>
        <ul class="links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/product">Product</Link></li>
          </ul>
          <button>sign In</button>
     </div>
    </div>
  )
}

export default Navbar
