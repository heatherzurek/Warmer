import React, { Component } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from './Components/ButtonAppBar';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Footer from './Components/Footer';
import Links from './Components/Links';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

render(){
  return (
    <div>
      <button onClick={this.increment} className="counter">+</button>
      <button onClick={this.decrement} className="counter">-</button>
      <h2>{this.state.count}</h2>
      <ButtonAppBar />
      <Header />
      <Intro />
      <Links />
      <Footer />

      </div>
    );
  }

}

export default App;
