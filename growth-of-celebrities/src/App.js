import React, { useState } from 'react';

import { Route } from 'react-router-dom';

import { FirstPage } from './Pages/FirstPage';
import { MainPage } from './Pages/MainPage';

import './App.css';

export function App() {

  const [height, setHeight] = useState('');

  function changeHeight(H) {
    setHeight(H);
  }

  return (
    <>
      <Route exact path="/" render={() => {
        return <FirstPage func={changeHeight.bind(this)}/>
      }}/>
      <Route path="/resault" render={() => {
        return <MainPage height={height}/>
      }} />
    </>
  );
}

