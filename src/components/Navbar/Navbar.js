import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

const Navbar = props => {
  return (
    <div className={'Navbar'}>
      <ul>
        <li><NavLink to={'/'}>Главная</NavLink></li>
        <li><NavLink to={'/about'}>О продукте</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
