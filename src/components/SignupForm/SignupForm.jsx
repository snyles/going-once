import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import authService from "../../services/authService"
import useForm from "../../lib/useForm"
import { Link } from 'react-router-dom'
import styles from './SignupForm.module.css'

import googleLogo from '../../Logos/googleLogo.png'
import facebookLogo from '../../Logos/facebookLogo.png'
import twitterLogo from '../../Logos/twitterLogo.png'

import './SignupForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function SignupForm( {handleSignupOrLogin} ) {
  const {inputs, handleChange, /* resetForm */ } = useForm({
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  })
  const { name, email, password, passwordConf } = inputs;

  const [message, setMessage] = useState('')
  const history = useHistory();

  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await authService.signup(inputs);
      // Let <App> know a user has signed up!
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <>
      <h1 id='AppName'>GOING ONCE</h1>
      <h1 id='signupTitle'>Create your account</h1>
      <div className='imgs'>
        <img src={googleLogo} id='googleSignin' />
        <img src={facebookLogo} id='facebookSignin' />
        <img src={twitterLogo} id='twitterSignin' />
      </div>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.signupForm}>
        <fieldset>
          {message && <p>{message}</p>}
          <input
            className='formText'
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            placeholder="name"
            onChange={handleChange}
          />
          <input
            className='formText'
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            placeholder="email"
            onChange={handleChange}
          />
          <input
            className='formText'
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
          <input
            className='formText'
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            placeholder="password confirmation"
            onChange={handleChange}
          />
          <p id='yesAccount'>Already have an account? <Link to='/login' id='loginLink'>Log in</Link></p>
          <div className='buttonsContainer'>
            <button type="submit" className='login-signupButton btn btn-dark' disabled={isFormInvalid()}><p id="signupText">Sign Up</p></button>
            {/* <button type="button" onClick={resetForm}>Reset</button>
            <button type="button" onClick={()=>history.push('/')}>Cancel</button> */}
          </div>
        </fieldset>
      </form>
    </>
  );
}
