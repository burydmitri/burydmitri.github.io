import React from 'react';
import { 
  Box,  
  Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TelegramIcon from '@material-ui/icons/Telegram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    sidebar: {
        maxWidth: '320px',
        width: '100%',
        height: '100vh',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#191919',
    },
    wrap: {
        display: 'flex',
        flexDirection: 'column',
    },
    link: {
    },
    icon: {
        fontSize: '70px',
        borderRadius: '50%',
        transition: '.3s',

        '&:hover': {
            color: '#e5e5e5'
        }
    }
});

export function Sidebar() {

  const classes = useStyles()

  return (
    <Box className={classes.sidebar} component="section">
        <Box className={classes.wrap}>
            <Box component="div">

            </Box>
            <Link 
                className={classes.link}
                href="https://t.me/dmitri_bury">
                <TelegramIcon className={classes.icon}/>
            </Link>
            <Link 
                className={classes.link}
                href="https://t.me/dmitri_bury">
                <LinkedInIcon className={classes.icon}/>
            </Link>
        </Box>
    </Box>
  );
}

