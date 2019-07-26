import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  // DecreaseItem = () => {
  //   this.setState({ clicks: this.state.clicks - 1 });
  // }
  // ToggleClick = () => {
  //   this.setState({ show: !this.state.show });
  // }
  
  render() {
    return (
      <div className="profileStyles">
      {this.state.show ? <h2 className="h2style"><span>Your Progress: </span>{ this.state.clicks }<span>%</span></h2> : '' }
        <h2>Home</h2>
        <p onClick={this.IncrementItem}>Energy Effcient Light Bulbs</p>
        <p onClick={this.IncrementItem}>Install Programmable Thermostat</p>
        <p onClick={this.IncrementItem}>Install Programmable Lightbulbs</p>
        <p onClick={this.IncrementItem}>Remove Your Lawn</p>
        <p onClick={this.IncrementItem}>Xeriscape Your Yard</p>
        <p onClick={this.IncrementItem}>Solar Panels</p>
        <p onClick={this.IncrementItem}>Unplug your Devices</p>
        <h2>Food</h2>
        <p onClick={this.IncrementItem}>Buy Organic</p>
        <p onClick={this.IncrementItem}>Eat Meat-Free Meals</p>
        <p onClick={this.IncrementItem}>Reduce Food Waste</p>
        <p onClick={this.IncrementItem}>Don't Drink Bottled Water</p>
        <p onClick={this.IncrementItem}>Say No To Plastic</p>
        <h2>Transportation</h2>
        <p onClick={this.IncrementItem}>Walk</p>
        <p onClick={this.IncrementItem}>Work From Home</p>
        <p onClick={this.IncrementItem}>Public Transportation</p>
        <p onClick={this.IncrementItem}>Ride Your Bike</p>
        <p onClick={this.IncrementItem}>Turn Off Your Engine</p>
        <p onClick={this.IncrementItem}>Carpool</p>


        {/* <p onClick={this.DecreaseItem}>Click to decrease by 1</p> */}
        {/* <p onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </p> */}
      </div>
    );
  }
}

export default App;