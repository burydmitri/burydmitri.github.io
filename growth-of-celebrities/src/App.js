import React from 'react';
import { Button } from '@material-ui/core/';

import { FirstPage } from './Pages/FirstPage/FirstPage';
import { Header } from './components/Header'
import { Main } from './components/Main'

import './App.css';

export function App() {
  return (
    <>
      {/* <FirstPage /> */}
      <Header />
      <Main />
    </>
  );
}

