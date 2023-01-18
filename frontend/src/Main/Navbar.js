import React from 'react'
import './Navbar.css'

function navbar() {
  return (
    <div>
        <div className='navbar-body'>
            <div className='navbar-logo'>
                <img src={'./Group.png'}/>
            </div>
            <div className='navbar-search'>
                <input type='text' className='navbar-search' placeholder='Search' alt='logo'/>
            </div>
            <div className='navbar-button'>
                <button>X</button>
                <button>X</button>
                <button>X</button>
            </div>
        </div>
    </div>
  )
}

export default navbar