import { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { UserContext } from '../../lib/UserContext'

import './navbar.css'

export default function NavBar ({ handleLogout }) {
  const user = useContext(UserContext)
  return (
    <nav>
      <main className='navbarContainer'>
        {user ?
          <>
              <span>Welcome, {user.name}</span>
              <NavLink to="" onClick={handleLogout} id='logOut'>Log Out</NavLink>
              {/* <li><NavLink to="/users">Users</NavLink></li> */}
          </>
        :
          <>
            {/* <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink> */}
          </>
        }
      </main>
    </nav>
  )
}

