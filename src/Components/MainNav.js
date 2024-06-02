import React from 'react'
import { Link } from 'react-router-dom'

function MainNav() {
  return (
    <div id="active-sticky" className="header-botom header-botom-two d-none d-lg-block">
    <div className="container position-relative">
      <div className="row align-items-center">
        <div className="col-12">
          <ul className="main-menu">
            <li className="main-menu-item position-relative">
              <Link to="/" className="main-menu-link">Home</Link>

            </li>
            <li className="main-menu-item position-static">
            <Link to="/Shop" className="main-menu-link">Shop</Link>
            </li>
            <li className="main-menu-item position-relative">
              <Link to="/Contact" className="main-menu-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MainNav
