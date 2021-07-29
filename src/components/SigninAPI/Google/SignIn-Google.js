import React from 'react';
import { Button } from '@material-ui/core'
import { Route, Redirect } from 'react-router-dom'
// import ReactDOM from 'react-dom';
// import { GoogleLogin } from 'react-google-login';

            // WITH REACT GOOGLE LOGIN \\
// const responseGoogle = (response) => {
//   console.log(response);
// }

// ReactDOM.render(
//   <GoogleLogin
//     // clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
//     clientId="49062751084-trdnhdhcp8mpkcfjh7deqv5fn003khkt.apps.googleusercontent.com"
//     buttonText="Login"
//     onSuccess={responseGoogle}
//     onFailure={responseGoogle}
//     cookiePolicy={'single_host_origin'}
//   />,
//   document.getElementById('googleButton')
// )


            // AS A CLASS COMPONENT \\
class SignInGoogle extends React.Component {
  
  insertGapiScript() {
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/platform.js'
    script.onload = () => {
      this.initializeGoogleSignIn()
    }
    document.body.appendChild(script)
  }

  initializeGoogleSignIn() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        // client_id: '49062751084-trdnhdhcp8mpkcfjh7deqv5fn003khkt.apps.googleusercontent.com'
        client_id: "218047893351-gv6931kd4paaufu0jemof8i12v5gcqae.apps.googleusercontent.com"
      })
      console.log('Api inited')

      window.gapi.load('signin2', () => {
        const params = {
          onsuccess: () => {
            <Redirect to="/items" />
            console.log('user signed in')
          }
        }
        window.gapi.signin2.render('googleLoginButton', params)
      })
    })
  }

  // onSignIn(googleUser) {
  //   const profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }

  componentDidMount() {
    console.log('loading')
    this.insertGapiScript()
  }

  signOut() {
    const auth2 = gapi.auth2.getAuthInstance()
    auth2.signOut().then(() => {
      console.log('User signed out.')
    })
  }


  render() {
    return (
      <div className="googleSignIn">
        <div id="googleLoginButton">Sign In</div>
        <Button variant="contained" color="secondary" id="logoutButton" onClick={this.signOut}>Sign Out</Button>
      </div>
    )
  }
}

export default SignInGoogle


            // AS A FUNCTION \\

// export default function SignInGoogle() {

//   insertGapiScript(() => {
//     const script = document.createElement('script')
//     script.src = 'https://apis.google.com/js/platform.js'
//     script.onload = () => {
//       this.initializeGoogleSignIn()
//     }
//     document.body.appendChild(script)
//   })

//   initializeGoogleSignIn(() => {
//     window.gapi.load('auth2', () => {
//       window.gapi.auth2.init({
//         // client_id: '49062751084-trdnhdhcp8mpkcfjh7deqv5fn003khkt.apps.googleusercontent.com'
//         client_id: "218047893351-gv6931kd4paaufu0jemof8i12v5gcqae.apps.googleusercontent.com"
//       })
//       console.log('Api inited')

//       window.gapi.load('signin2', () => {
//         const params = {
//           onsuccess: () => {
//             console.log('user signed in')
//           }
//         }
//         window.gapi.signin2.render('loginButton', params)
//       })
//     })
//   })

//   componentDidMount(() => {
//     console.log('loading')
//     this.insertGapiScript()
//   })

//   signOut(() => {
//     const auth2 = gapi.auth2.getAuthInstance()
//     auth2.signOut().then(() => {
//       console.log('User signed out.')
//     })
//   })

//   return (
//     <div className="googleSignIn">
//       <h1>google sign in</h1>
//       <div id="loginButton">sign in google</div>
//       <Button variant="contained" color="secondary" id="logoutButton" onClick={this.signOut}>sign out google</Button>
//     </div>
//   )
// }