import React from 'react'
import './Navbar.css'

function navbar() {
  return (
    <div>
        <div className='navbar-body'>
            <div className='navbar-top'>
                <div className='navbar-logo'>
                    <img src={'./Group.png'}/>
                </div>
                <div className='navbar-search'>
                    <input type='text' placeholder='Search' alt='logo'/>
                </div>
            </div>
            <div className='navbar-bottom'>
                <button className='button'>40K Stories</button>
                <button className='button'>40K Tabletop</button>
                <button className='button'>Tabletop Games</button>
                <button className='button'>Other Books</button>
            </div>
        </div>
    </div>
  )
}

export default navbar