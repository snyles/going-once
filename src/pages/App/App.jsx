import { useState } from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Users from '../Users/Users'
import authService from "../../services/authService"
import { UserContext } from '../../lib/UserContext'
import ProtectedRoute from "../../components/ProtectedRoute";
import { Link } from 'react-router-dom'
import Map from '../Map/Map'
import PostDetails from '../../components/postDetails/postDetails.jsx'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App (props) {
  const [user, setUser] = useState(authService.getUser())
  const history = useHistory();

  const handleLogout = () => {
    authService.logout();
    setUser(null)
    history.push("/");
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  }

  return (
    <>
      <UserContext.Provider value={user}>
        <NavBar handleLogout={handleLogout} />
        <Switch>
          <Route
            path="/signup"
            render={() => (
              <Signup
              handleSignupOrLogin={handleSignupOrLogin}
              />
              )}
          />
          <Route
            path="/login"
            render={() => (
              <Login
              handleSignupOrLogin={handleSignupOrLogin}
              />
              )}
          />
          <ProtectedRoute path='/users'>
              <Users />
          </ProtectedRoute>
          <Route
            exact path="/"
            render={() => (
              <main>
                <h1>Going Once</h1>
                <Link to='/login' className='linkTag btn btn-dark'><p>ENTER</p></Link>
              </main>
            )}
          />
          <Route
            exact path='/map'
            render={() => (
              <main>
                <Map />
                <PostDetails />
              </main>
            )}
          />
        </Switch>
      </UserContext.Provider>
    </>
  );
}

