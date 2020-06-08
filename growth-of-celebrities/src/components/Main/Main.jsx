import React from 'react';
import { 
  Box,  
  Typography,
  Card,
  Paper,
  IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    main: {
        maxWidth: '1000px',
        width: '100%',

        display: 'flex',
        flexDirection: 'column',

        padding: '30px',
        margin: '0 auto'
    },
    title: {
        fontWeight: '700',
        color: '#191919'
    },
    scaleWrap: {
        height: '100vh',

        position: 'relative'
    },
    line: {
        width: '5px',
        height: '100%',

        position: 'absolute',
        top: '0',
        left: '0',

        background: '#5b5553',
        borderRadius: '3px',
    },
    card: {

        background: '#fff',
        color: '#191919',
        borderBottom: '3px solid #ea3057',

        marginLeft: '30px',
        padding: '20px',
    },
});

export function Main() {

  const classes = useStyles()

  return (
    <Box className={classes.main} component="main">
        {/* <Typography 
            className={classes.title}
            variant="body1" 
            component="h2">
            Scale:
        </Typography> */}
        <Box className={classes.scaleWrap} component="div">
            <Box className={classes.line} component="div" />

            <Card className={classes.card} component="div">
                Hello, world!
            </Card>
        </Box>
    </Box>
  );
}

