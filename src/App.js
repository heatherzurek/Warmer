import React from 'react';
import './App.css';
// import { makeStyles } from '@material-ui/core/styles';
import Footer from './Components/Footer';
import About from './Components/About';
import How from './Components/How';
import { Switch, Route } from 'react-router-dom';
import Splash from './Components/Splash';
import Welcome from './Components/Welcome';
// import Nav from './Components/Nav';
import Profile from './Components/Profile';
import DetailedExpansionPanel from './Components/Nav';


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
      <DetailedExpansionPanel />
      <Splash />
      <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/how' component={How} />
      <Route path='/about' component={About} />
      <Route path='/profile' component={Profile} />
      </Switch>
      {/* <button onClick={this.incrementUp} className="counter">+</button>
      <button onClick={this.decrementDown} className="counter">-</button>
      <h2>{this.state.count}</h2> */}
      <Footer />
      </div>
    );
  }

}

export default App;
