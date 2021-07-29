import { useState } from "react"
import { Route, useHistory, Switch } from "react-router-dom"
import Signup from "../Signup/Signup"
import Login from "../Login/Login"
import authService from "../../services/authService"
import { UserContext } from '../../lib/UserContext'
import { LocationContext } from "../../lib/LocationContext"
import ProtectedRoute from "../../components/ProtectedRoute"
import SplashPage from "../SplashPage"
import Post from "../Post"
import ItemsPage from "../Items"
import NavBar from "../../components/NavBar"
import Favorites from "../Favorites"
import ItemPage from "../Item"

// import GoogleSI from '../../components/SigninAPI/Google/SignIn-Google'

export default function App () {
  const [user, setUser] = useState(authService.getUser())
  const history = useHistory();

  const handleLogout = () => {
    authService.logout();
    setUser(null)
    history.push("/items");
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
        {history.location.pathname !== '/' && 
          <NavBar handleLogout={handleLogout} />
        }
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
          <Route
            path="/items"
            render={() => (
              <ItemsPage />
            )}
          />
          <Route
            path="/item/:id"
            render={() => (
              <ItemPage />
              )}
          />
          <Route
          path="/item"
          render={() => (
            <ItemPage />
          )}
          />
          <ProtectedRoute path='/post'>
            <Post />
          </ProtectedRoute>
          <ProtectedRoute path='/favorites'>
            <Favorites />
          </ProtectedRoute>
          <Route
            exact path="/"
            render={() => (
              <SplashPage />
            )}
          />
          {/* <Route
            exact path="/googleSI"
            render={() => (
              <GoogleSI />
            )}
          /> */}
        </Switch>
      </LocationContext.Provider>
      </UserContext.Provider>
    </>
  );
}

