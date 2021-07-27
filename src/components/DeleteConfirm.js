import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

export default function DeleteConfirm ({isOpen, setIsOpen, deleteItem}) {

  return (
    <Dialog open = {isOpen}>
      <DialogTitle>Are you sure you want to delete?</DialogTitle>
      <DialogActions>
        <Button variant="contained" color="secondary" onClick={deleteItem}>Delete</Button>
        <Button variant="contained" color="primary" onClick={() => setIsOpen(false)}>Cancel</Button>
      </DialogActions>
    </Dialog>
  )
}