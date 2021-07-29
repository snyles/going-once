import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import authService from "../../services/authService"
import useForm from "../../lib/useForm"
import styles from './SignupForm.module.css'
import { Button } from "@material-ui/core"

import googleLogo from '../../assets/logos/googleLogo.png'
import facebookLogo from '../../assets/logos/facebookLogo.png'
import twitterLogo from '../../assets/logos/twitterLogo.png'

import OpenGoogleSI from '../SigninAPI/Google/OpenSigninGoogle'

import './SignupForm.css'

export default function SignupForm( {handleSignupOrLogin} ) {
  const {inputs, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  })
  const { name, email, password, passwordConf } = inputs;

  const [message, setMessage] = useState('')
  // const [googleSI, setGoogleSI] = useState()
  const [isOpen, setIsOpen] = useState(false)
  const history = useHistory();

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.signup(inputs);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/items");
    } catch (err) {
      setMessage(err.message);
    }
  };

  useEffect(() => {
    document.body.classList.add("gradientBg")
    return () => document.body.classList.remove("gradientBg")
  }, [])

  // const showGoogleSignIn = (isOpen, setIsOpen) => {
  //   return (
  //     // <div>
  //     //   {googleSI && <GoogleSI />}
  //     //   setGoogleSI(true)
  //     // </div>
  //     <div></div>
  //   )
  // }

  return (
    <>
      <h1 id='signupTitle'>Create your account</h1>
      <div className='imgs'>
        <img src={googleLogo} className='googleSignin' alt="Sign Up with Google" onClick={() => setIsOpen(true)} />
        <img src={facebookLogo} className='facebookSignin' alt="Login with Facebook" />
        <img src={twitterLogo} className='twitterSignin' alt="Login with Twitter" />
      </div>
      <form autoComplete="off" onSubmit={(e)=>e.preventDefault()} className={styles.signupForm}>
        <fieldset>
          {message && <p>{message}</p>}
          {/* <label htmlFor="name">Name</label> */}
          <input
            className='formText'
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          {/* <label htmlFor="email">Email</label> */}
          <input
            className='formText'
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          {/* <label htmlFor="password">Password</label> */}
          <input
            className='formText'
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {/* <label htmlFor="confirm">Confirm Password</label> */}
          <input
            className='formText'
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            placeholder="Password Confirmation"
            onChange={handleChange}
          />
          <div className={styles.buttons}>
            <Button 
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={isFormInvalid()}
            >
              Sign Up
            </Button>
            <Button 
              variant="contained"
              color="secondary"
              onClick={resetForm}
            >
              Reset
            </Button>
          </div>
        </fieldset>
      </form>
      <p id='yesAccount'>Already have an account? <Link to='/login' id='loginLink'>Log in!</Link></p>
      <OpenGoogleSI isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
