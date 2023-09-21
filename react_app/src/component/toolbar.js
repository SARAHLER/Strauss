import * as React from 'react';
import { Toolbar, Box, AppBar, Avatar } from '@mui/material';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: ' #007bff' }}>
        <Toolbar>
          <Box variant="h6" component="div"
            sx={{
              flexGrow: 1,
              textDecoration: "none",
              marginRight: "10px",
              alignItems: "flexStart",
              "& a": {
                color: "white",
                textDecoration: "none",
                marginRight: '10px'
              }
            }}>

            <Link to='/'>Sign-in</Link>
            <Link to='/Signup'>Sign-up</Link>
          </Box>

          <Avatar
            alt="logo"
            src={logo}
            sx={{
              width: "70px",
              height: "50px",
              borderRadius: "0",
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}