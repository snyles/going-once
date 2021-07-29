import { useContext } from 'react';
import { Link, NavLink } from "react-router-dom";
import { UserContext } from '../lib/UserContext';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { NavStyles } from './Styles/NavStyles';

export default function NavBar ({ handleLogout }) {
  const user = useContext(UserContext)
  return (
    <NavStyles>
      <div className="container">
        <div className="logo">
          <Link to="/">Going Once</Link>
        </div>
        <div className="links">
          <NavLink to="/items">
            <span className="icon"><HomeOutlinedIcon fontSize="inherit" /></span>
            Home
          </NavLink>
          <NavLink to="/post">
            <span className="icon"><AddCircleOutlineIcon fontSize="inherit" /></span>
            Post
          </NavLink>
          <NavLink to="/favorites">
            <span className="icon"><FavoriteBorderOutlinedIcon fontSize="inherit"/></span>
            Favorites
          </NavLink>
        </div>
        <div className="auth">
        {user ?
          <Link to="" onClick={handleLogout}>
            Log Out ({user.name})
          </Link>
        :
          <NavLink to="/login">
            Log In
          </NavLink>
        }
        </div>
      </div>
    </NavStyles>
  )
}

