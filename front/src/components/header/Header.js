import { BoxIconElement } from 'boxicons'
import React from 'react'
import reactLogo from "../../../src/logo.svg";

function Header() {
  return (
    <header>
      <a href='#'>
          <div className='logo'>
            <img src={reactLogo} alt="logo" width="130"/>
          </div>
        </a>
        <ul>
          <li>
            <a href='#'>INICIO</a>
          </li>
          <li>
            <a href='#'>PRODUCTOS</a>
          </li>
        </ul>
        <div className='cart'>
        <box-icon name="cart"></box-icon>
        <span className="item__total">0</span>
        </div>  
        </header>
  )
}

export default Header
