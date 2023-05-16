import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav_bar = () => {
  return (
    <div>
        <AppBar color='success'>
            <Toolbar>
                <Typography color={{color:"white"}} align='left' sx={{flexGrow:1}}>Blog Page</Typography>
                <Button><Link to={'/'} style={{color:"white",textDecoration:"none"}}>HOME</Link></Button>
                <Button><Link to={'/add'} style={{color:"white",textDecoration:"none"}}>ADD</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Nav_bar
