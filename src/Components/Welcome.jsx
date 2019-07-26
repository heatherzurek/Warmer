import React from 'react';
import Intro from './Intro';
import AnimatedTypingComponent from './AnimatedTypingComponent';

export default function Welcome(props) {
      const divStyles = {
        margin: '0 auto',
        padding: '10px',
      }
    return (
    <div style={divStyles}>
      <AnimatedTypingComponent />
      {/* <h1>Welcome, Whats your name?</h1> */}
      <Intro />
    </div>

    )
};
