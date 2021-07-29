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
      <ul>
        <li className="logo">
          <Link to="/">Going Once
          </Link>
        </li>
        <li>
          <NavLink to="/items">
          <span className="icon"><HomeOutlinedIcon fontSize="inherit" /></span>
          Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/post">
          <span className="icon"><AddCircleOutlineIcon fontSize="inherit" /></span>
          Post
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites">
          <span className="icon"><FavoriteBorderOutlinedIcon fontSize="inherit"/></span>
          Favorites
          </NavLink>
        </li>

      {user ?
        <li><Link to="" onClick={handleLogout}>Log Out ({user.name})</Link></li>
      :
        <li className="login"><NavLink to="/login">Log In</NavLink></li>
      }
      </ul>
    </NavStyles>
  )
}

