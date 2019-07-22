import React from 'react';
import './App.css';
// import { makeStyles } from '@material-ui/core/styles';
import ButtonAppBar from './Components/ButtonAppBar';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Footer from './Components/Footer';
import Informational from './Components/Informational';
import Prevention from './Components/Prevention';
import { Switch, Route } from 'react-router-dom';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.incrementUp = this.incrementUp.bind(this);
    this.decrementDown = this.decrementDown.bind(this);
  }

  incrementUp = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decrementDown = () => {
    this.setState({ count: this.state.count - 1 });
  }

render(){
  return (
    <div>
      <ButtonAppBar />
      <Header />
      <Intro />
      <Switch>
      <Route exact path='/' component={Informational} />
      <Route path='/prevention' component={Prevention} />

      </Switch>
      <button onClick={this.incrementUp} className="counter">+</button>
      <button onClick={this.decrementDown} className="counter">-</button>
      <h2>{this.state.count}</h2>
      <Footer />

      </div>
    );
  }

}

export default App;
