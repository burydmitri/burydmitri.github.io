import React, { useState } from 'react';
import { 
  Box,  
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer } from '@material-ui/core';
import { Menu } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import { Sidebar } from '../Sidebar';

const useStyles = makeStyles({
  toolbar: {
    maxWidth: '1000px',
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    margin: '0 auto'
  },
  title: {
    color: '#e5e5e5'
  }
});

export function Header() {

  const [sidebar, setSidebar] = useState(false);

  const classes = useStyles();

  function toggleSidebar() {
    if (sidebar) setSidebar(false);
    if (!sidebar) setSidebar(true);
  }

  return (
    <Box component="header">
      <Drawer
        anchor="right"
        open={sidebar}
        onClose={toggleSidebar}>
        <Sidebar />
      </Drawer>
      <AppBar position="static">
        <Toolbar className={classes.toolbar} variant="regular">
          <Typography 
            className={classes.title}
            component="h2" 
            variant="h6"
          >
            Growth of Celebrities
          </Typography>
          <IconButton onClick={toggleSidebar}>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

