import React from 'react';
import { 
  Box,  
  Typography,
  Card} from '@material-ui/core';

import { data } from '../../data'

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
    },
    ps: {
        marginTop: '15px',
        color: '#5b5553',
    }
});


export function Main() {


  const classes = useStyles();

  let height = localStorage.getItem('height');

  let title = '';

  if (height.replace(/\s/g, '').length === 0 || isNaN(height)) {
    title = "Err";
    } else {
        title = height
    }

    const person = data.filter((item) => {
        if (item.height === +height) return item;
    });
    if (person.length === 0) person.push({
        cardTitle: 'Человека с таким ростом нет в базе',
        text: '',
    })

  return (
    <Box className={classes.main} component="main">
        <Box className={classes.wrap} component="div">
            <Typography 
                className={classes.title}
                variant="h1" 
                component="h2">
                {title}
            </Typography>
            <Card className={classes.card} component="div">
                <Typography
                    className={classes.card__title}
                    variant="h6"
                    component="p">
                    {person[0].cardTitle}
                </Typography>
                <Typography
                    variant="body1"
                    component="p">
                    {person[0].text}
                </Typography>
                <Typography
                    className={classes.ps}
                    variant="body1"
                    component="p">
                    Попробуйте еще раз! Введите рост ваших знакомых: семьи, друзей, коллег и узнайте знаменитостей с таким же ростом. Убедитесь что человек независимо от роста, или других физических характеристик, может достичь любых высот!
                </Typography>
            </Card>
        </Box>
    </Box>
  );
}

