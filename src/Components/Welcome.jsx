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
      {/* <AnimatedTypingComponent /> */}
      <h1>Welcome,</h1>
      <Intro />
      <hr></hr>
      <div className="resources">
        <h1>Resources</h1>
        <a href="https://www.nationalgeographic.org/encyclopedia/global-warming/">What is Global Warming?</a>
        <a href="https://climate.nasa.gov/resources/global-warming/">Global Warming vs. Climate Change</a>
        <a href="https://www.ucsusa.org/">Union Of Concerned Scientists</a>
      </div>

    </div>

    )
};
