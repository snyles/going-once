import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Login.module.css";
import authService from '../../services/authService'
import useForm from "../../lib/useForm";
import Page from "../../components/Page";

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
      history.push("/items");
    } catch (err) {
      // Use a modal or toast in your apps instead of alert
      setMessage(err.message)
    }
  };

  return (
    <Page>
      <h1>Log In</h1>
      <form className={styles.loginForm}autoComplete="off" onSubmit={handleSubmit}>
        <fieldset>
          {message && <p>{message}</p>}
          <label htmlFor="email">Email</label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            onChange={handleChange}
          />
          <div>
            <button type="submit">Log In</button>
            <button type="button" onClick={()=>history.push('/')}>Cancel</button>
          </div>
        </fieldset>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up!</Link></p>
    </Page>
  );
}
