import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar-main'>
        <div className='sidebar-body'>
            <div className='sidebar-search'>
                <input type="text" placeholder="Search categories"/>
            </div>
            <div>
                <p>Popular categories</p>
            </div>
            <div>
                <p>New books categories</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar