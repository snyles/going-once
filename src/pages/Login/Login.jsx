import { useState } from "react"
import { useHistory } from "react-router-dom"
import styles from "./Login.module.css"
import authService from '../../services/authService'
import useForm from "../../lib/useForm"
import { Link } from 'react-router-dom'

import googleLogo from '../../Logos/googleLogo.png'
import facebookLogo from '../../Logos/facebookLogo.png'
import twitterLogo from '../../Logos/twitterLogo.png'

import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function LoginPage({handleSignupOrLogin}) {
  const {inputs, handleChange} = useForm({
    email: "",
    pw: "",
  });
  const {email, pw} = inputs;
  const [message, setMessage] = useState('')

  const history = useHistory();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login(inputs);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      setMessage(err.message)
    }
  };

  return (
    <main>
      <h1 id='loginAppName'>GOING ONCE</h1>
      <h1 id='loginTitle'>Welcome Back!<br></br>Log In</h1>
      <div className='imgs'>
        <img src={googleLogo} id='googleSignin' />
        <img src={facebookLogo} id='facebookSignin' />
        <img src={twitterLogo} id='twitterSignin' />
      </div>
      <form className={styles.loginForm}autoComplete="off" onSubmit={handleSubmit}>
        <fieldset>
          {message && <p>{message}</p>}
          {/* <label htmlFor="email">Email</label> */}
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
          {/* <label htmlFor="password">Password</label> */}
          <input
            className='formText'
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            placeholder="password"
            onChange={handleChange}
          />
        </fieldset>
            {/* <button type="button" onClick={()=>history.push('/')}>Cancel</button> */}
      </form>
      <p id='noAccount'>Don't have an account? <Link to='/signup' id='noAccountSignUp'>Sign up</Link></p>
      <div className='buttonsContainer'>
        <Link type="submit" className='loginButton btn btn-dark' onClick={()=>history.push('/map')}><p id='loginText'>Log In</p></Link>
      </div>
    </main>
  );
}
