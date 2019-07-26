import React, { Component } from 'react';

class Change extends Component {
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
        <p style={{margin: '2px'}} onClick={this.IncrementItem}>Energy Effcient Light Bulbs</p>
        <p style={{margin: '2px'}} onClick={this.IncrementItem}>Install Programmable Thermostat</p>
        <p style={{margin: '2px'}}  onClick={this.IncrementItem}>Install Programmable Lightbulbs</p>
        <p style={{margin: '2px'}} onClick={this.IncrementItem}>Remove Your Lawn</p>
        <p style={{margin: '2px'}} onClick={this.IncrementItem}>Xeriscape Your Yard</p>
        <p style={{margin: '2px'}} onClick={this.IncrementItem}>Solar Panels</p>
        <p style={{margin: '2px'}} onClick={this.IncrementItem}>Unplug your Devices</p>
        <h2>Food</h2>
        <p style={{margin: '2px'}} onClick={this.IncrementItem}>Buy Organic</p>
        <p style={{margin: '2px'}} onClick={this.IncrementItem}>Eat Meat-Free Meals</p>
        <p style={{margin: '2px'}} onClick={this.IncrementItem}>Reduce Food Waste</p>
        <p style={{margin: '2px'}} onClick={this.IncrementItem}>Don't Drink Bottled Water</p>
        <p style={{margin: '2px'}} onClick={this.IncrementItem}>Say No To Plastic</p>
        <h2>Transportation</h2>
        <p style={{margin: '2px'}} onClick={this.IncrementItem}>Walk</p>
        <p style={{margin: '2px'}} onClick={this.IncrementItem}>Work From Home</p>
        <p style={{margin: '2px'}} onClick={this.IncrementItem}>Public Transportation</p>
        <p style={{margin: '2px'}} onClick={this.IncrementItem}>Ride Your Bike</p>
        <p style={{margin: '2px'}} onClick={this.IncrementItem}>Turn Off Your Engine</p>
        <p style={{margin: '2px'}} onClick={this.IncrementItem}>Carpool</p>


        {/* <p onClick={this.DecreaseItem}>Click to decrease by 1</p> */}
        {/* <p onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </p> */}
      </div>
    );
  }
}

export default Change;