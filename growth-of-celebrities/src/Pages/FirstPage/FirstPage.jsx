import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { 
  Box,  
  Typography,
  TextField,
  Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   section: {
    minHeight: '100vh',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#ea3057'
   },
   wrap: {
    maxWidth: '1000px',
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    margin: '0 auto',
    padding: '15px'
   },
   title: {
    fontSize: 'calc(36px + 16 * (100vw / 1440))',
    fontWeight: '700',
    color: '#e5e5e5',
    textAlign: 'center',

    marginBottom: '10px',
   },
   form: {
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   },
   input: {
       fontSize: 'calc(24px + 12 * (100vw / 1440))',
       
       marginBottom: '20px',
   },
   link: {
    textDecoration: 'none',
   },
   button: {
       color: '#e5e5e5',
       fontSize: 'calc(24px + 12 * (100vw / 1440))',
   }
});

export function FirstPage(props) {
  
  const [height, setHeight] = useState('')
  const classes = useStyles();

  function changeHeight(e) {
    setHeight(e.target.value);
  }

  return (
    <Box className={classes.section} component="section">
        <Box className={classes.wrap} component="div">
            <Typography 
                className={classes.title}
                variant="h2" 
                component="h1">
                Write your height
            </Typography>
            <form className={classes.form}>
                <TextField 
                    type="number"
                    className={classes.input}
                    color="secondary"
                    autoFocus
                    fullWidth={true}
                    label="Your height"
                    variant="filled"
                    value={height}
                    onChange={changeHeight}
                    >   

                </TextField>
                <Link className={classes.link} to="/resault">
                    <Button 
                        className={classes.button}
                        color="secondary"
                        variant="contained"
                        onClick={props.func(height)}>
                        Искать!
                    </Button>
                </Link>
            </form>
        </Box>
    </Box>
  );
}

