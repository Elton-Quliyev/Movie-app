import React from 'react'
import { Link , Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <ul className='nav'>

        <li className='item'>
          <Link to='/'>Posterler</Link>
        </li>
        <li className='item'>
            <Link to='/nowplaying'>Now Playing</Link>
        </li>
        
      </ul>







      <div style={{ margin: "50px 0" }}>
        <Outlet />
      </div>
    </>
  )
}
