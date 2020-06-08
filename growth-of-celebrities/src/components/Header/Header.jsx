import React from 'react';
import { 
  Box,  
  AppBar,
  Toolbar,
  Typography,
  IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

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

  const classes = useStyles()

  return (
    <Box component="header">
      <AppBar position="static">
        <Toolbar className={classes.toolbar} variant="regular">
          <Typography 
            className={classes.title}
            component="h1" 
            variant="h6"
          >
            Growth of Celebrities
          </Typography>
          <IconButton>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

