// src/components/Header.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import StacklineLogo from '../assets/stackline_logo.svg';
import '../styles/ProductPage.css';

const Header = () => {
  return (
    <AppBar position="static" varient="dense" sx={{ marginBottom: 2 }}>
      <Toolbar>
        <Box
          component="img"
          sx={{ height: 40, marginRight: 2 }}
          alt="Stackline Logo"
          src={StacklineLogo}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
