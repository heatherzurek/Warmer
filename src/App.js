import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from './Components/ButtonAppBar';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Footer from './Components/Footer';
import Links from './Components/Links';


function App() {
  return (
    <div>
      <ButtonAppBar />
      <Header />
      <Intro />
      <Links />
      <Footer />

    </div>
  );
}

export default App;