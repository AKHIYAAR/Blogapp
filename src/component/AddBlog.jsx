import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const AddBlog = () => {
  return (
    <div>
        <br /><br /><br /><Typography variant='h3' style={{color:'green'}}>ADD BLOG</Typography>
        <TextField label="Blog Name" variant="filled" color="success" /><br /><br />
        <TextField label="Description"  multiline minRows={2}variant="filled" color="success" /><br /><br />
        <TextField label="Author Name" variant="filled" color="success" /><br /><br />
        <Button variant='contained' color='success'>Submit</Button>
    </div>
  )
}

export default AddBlog
