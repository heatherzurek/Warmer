import React, { Component } from 'react';
import List from './List';
import Change from './Change';
import LetterAvatars from './LetterAvatars';

export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  render() {
    return (
        <div>
          <LetterAvatars />
        <Change />
        <hr></hr>
        <h3 className="h3style">To Do List:</h3>
        <form className="App" onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}