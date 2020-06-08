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

        padding: '40px 10px',
        margin: '0 auto'
    },
    title: {
        fontWeight: '700',
        color: '#191919',
        textAlign: 'center',
    },
    wrap: {
        minHeight: 'calc(100vh - 144px)',
        overflowY: 'auto',

        position: 'relative'
    },
    card: {

        background: '#fff',
        color: '#191919',
        borderBottom: '3px solid #ea3057',

        padding: '20px',
    },
    card__title: {
        marginBottom: '10px'
    }
});

export function Main() {

  const classes = useStyles()

  return (
    <Box className={classes.main} component="main">
        <Box className={classes.wrap} component="div">
            <Typography 
                className={classes.title}
                variant="h1" 
                component="h2">
                174
            </Typography>
            <Card className={classes.card} component="div">
                <Typography
                    className={classes.card__title}
                    variant="h6"
                    component="p">
                    Вы одного роста с Жан-Клод Ван Даммом
                </Typography>
                <Typography
                    variant="body1"
                    component="p">
                    Американский актёр, режиссёр, сценарист, постановщик боевых сцен и продюсер бельгийского происхождения; культурист, мастер боевых искусств.
                </Typography>
            </Card>
        </Box>
    </Box>
  );
}

