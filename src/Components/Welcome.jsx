import React from 'react';
import Intro from './Intro';
import ButtonBases from './ButtonBases';

export default function Welcome(props) {
      const divStyles = {
        margin: '0 auto',
        padding: '10px',
      }
      return (
        <div style={divStyles}>
      <h1 style={{textAlign: 'center', fontSize: '50px', margin: '0'}}>Warmer</h1>
      <Intro />
      <div className="imageDisplays">
        <ButtonBases />
      </div>
      <hr></hr>
      <div className="resources">
        <h1>Resources</h1>
        <a href="https://www.nationalgeographic.org/encyclopedia/global-warming/">What is Global Warming?</a>
        <a href="https://climate.nasa.gov/resources/global-warming/">Global Warming vs. Climate Change</a>
        <a style={{marginBottom: '25px'}}href="https://www.ucsusa.org/">Union Of Concerned Scientists</a>  
      </div>
     </div>

    )
};
