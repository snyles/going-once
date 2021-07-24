import { useState } from "react";
import { Route, useHistory, Switch } from "react-router-dom";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Users from '../Users/Users'
import authService from "../../services/authService"
import { UserContext } from '../../lib/UserContext'
import { LocationContext } from "../../lib/LocationContext";
import ProtectedRoute from "../../components/ProtectedRoute";
import SplashPage from "../SplashPage";
import Map from "../Map";
import Post from "../Post"

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

  const [location, setLocation] = useState({
    name: "",
    coords: {},
  })

  const setLoc = (newLoc) => {
    setLocation(newLoc)
  }

  return (
    <>
      <UserContext.Provider value={user}>
      <LocationContext.Provider value={{location, setLoc}}>
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
            path="/map"
            render={() => (
              <Map />
            )}
          />

          <Route
            path="/post"
            render={() => (
              <Post />
            )}
          />

          <Route
            path="/"
            render={() => (
              <SplashPage />
            )}
          />
        </Switch>
      </LocationContext.Provider>
      </UserContext.Provider>
    </>
  );
}

