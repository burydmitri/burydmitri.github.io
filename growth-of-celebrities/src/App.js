import React from 'react';

import { Route } from 'react-router-dom';

import { FirstPage } from './Pages/FirstPage';
import { MainPage } from './Pages/MainPage';

import './App.css';

export function App() {

  return (
    <>
      <Route exact path="/" component={FirstPage}/>
      <Route path="/resault" component={MainPage}/>
    </>
  );
}

