import { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { UserContext } from '../lib/UserContext';
import styled from 'styled-components'

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const NavStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  width: 80%;
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
    color: var(--black)
  }
  .icon {
    font-size: 4rem;
  }
  .logo {
    font-size: 2.5rem;
  }
`;

export default function NavBar ({ handleLogout }) {
  const user = useContext(UserContext)
  return (
    <NavStyles>
      <ul>
        <li className="logo">
          <NavLink to="/">Going Once
          </NavLink>
        </li>
        <li className="icon">
          <NavLink to="/items">
          <HomeOutlinedIcon 
            fontSize="inherit" 
          />
          </NavLink>
        </li>
        <li className="icon">
          <NavLink to="/post">
          <AddCircleOutlineIcon fontSize="inherit" />
          </NavLink>
        </li>
        <li className="icon">
          <NavLink to="/favorites">
          <FavoriteBorderOutlinedIcon fontSize="inherit"/>
          </NavLink>
        </li>

      {user ?
        <li><NavLink to="" onClick={handleLogout}>Log Out ({user.name})</NavLink></li>
      :
        <li className="login"><NavLink to="/login">Log In</NavLink></li>
      }
      </ul>
    </NavStyles>
  )
}

