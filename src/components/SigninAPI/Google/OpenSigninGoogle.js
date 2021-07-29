import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import GoogleSI from './SignIn-Google'

const OpenGoogleSignIn = ({isOpen, setIsOpen}) => {

  return (
    <Dialog open = {isOpen}>
      <DialogTitle>Sign In with Google</DialogTitle>
      <GoogleSI />
      <DialogActions>
        <Button variant="contained" color="primary" onClick={() => setIsOpen(false)}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default OpenGoogleSignIn

// export default function OpenGoogleSignIn ({isOpen, setIsOpen}) {

//   return (
//     <Dialog open = {isOpen}>
//       <DialogTitle>Signin with Google</DialogTitle>
//       <DialogActions>
//         <Button variant="contained" color="primary" onClick={() => setIsOpen(false)}>Close</Button>
//       </DialogActions>
//     </Dialog>
//   )
// }