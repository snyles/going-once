import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { UserContext } from '../lib/UserContext';
import styled from 'styled-components'

import HomeIcon from '@material-ui/icons/Home';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';

const NavStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 768px;

  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    font-size: 2rem;
  }
  li a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  li:hover{
    background: #efefef;
  }
  li:last-child {
    margin-left: auto;
  }
  li:first-child {
    margin-right: auto;
  }
  a {
    color: green;
  }
  .icon {
    font-size: 4rem;
  }
`;


export default function NavBar ({ handleLogout }) {
  const user = useContext(UserContext)
  return (
    <NavStyles>
      <ul>
        <li>Logo</li>
      {/* </ul>
      <ul> */}
        <li className="icon"><NavLink to="/items">
          <HomeIcon fontSize="inherit" />
        </NavLink></li>
        <li className="icon"><NavLink to="/post">
          <AddCircleOutlineIcon fontSize="inherit" />
        </NavLink></li>
        <li className="icon"><NavLink to="/items">
          <FavoriteIcon fontSize="inherit"/></NavLink></li>
      {/* </ul> */}
      {/* <ul> */}
      {user ?
        <li><NavLink to="" onClick={handleLogout}>Log Out</NavLink></li>
      :
        <li className="login"><NavLink to="/login">Log In</NavLink></li>
      }
      </ul>
    </NavStyles>
  )
}

