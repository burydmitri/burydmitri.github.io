import React from 'react';
import { 
  Box,  
  Typography,
  Input,
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
   input: {
       fontSize: 'calc(24px + 12 * (100vw / 1440))',
       
       padding: '15px',
       marginBottom: '20px',
   },
   button: {
       color: '#e5e5e5',
       fontSize: 'calc(24px + 12 * (100vw / 1440))',
   }
});

export function FirstPage() {

  const classes = useStyles()

  return (
    <Box className={classes.section} component="section">
        <Box className={classes.wrap} component="div">
            <Typography 
                className={classes.title}
                variant="h2" 
                component="h1">
                Write your height
            </Typography>
            <Input 
                className={classes.input}
                color="secondary"
                autoFocus
                fullWidth={true}
                placeholder="174"
                >   

            </Input>
            <Button 
                className={classes.button}
                color="secondary"
                variant="contained">
                Искать!
            </Button>
        </Box>
    </Box>
  );
}

