import React from 'react';
import Intro from './Intro';
// import CustomizedDialogs from './CustomizedDialogs';
// import AnimatedTypingComponent from './AnimatedTypingComponent';

export default function Welcome(props) {
      const divStyles = {
        margin: '0 auto',
        padding: '10px',
      }
      // const customModal = {
      //   textAlign: 'center',
      // }
      return (
        <div style={divStyles}>
      <h1 style={{textAlign: 'center', fontSize: '50px', margin: '0'}}>Warmer</h1>
          {/* <div style={customModal}>
          <CustomizedDialogs />
          </div> */}
      <Intro />
      <div className="imageDisplays">
      <img style={{width: '320px', height: '300px', marginTop: '10px'}} src="https://cdn1.i-scmp.com/sites/default/files/styles/1200x800/public/images/methode/2019/02/09/6a35bcce-2aba-11e9-8864-9e8ab15a22ca_image_hires_132456.JPG?itok=OYiy44rL&v=1549689899" alt="new"/>
      <img style={{width: '320px', height: '300px', marginTop: '10px'}} src="https://timedotcom.files.wordpress.com/2016/08/pollution.jpg" alt="new"/>
      <img style={{width: '320px', height: '300px', marginTop: '10px'}} src="https://images.theconversation.com/files/285435/original/file-20190724-110187-13zyuat.JPG?ixlib=rb-1.1.0&rect=0%2C287%2C2592%2C1652&q=45&auto=format&w=496&fit=clip" alt="new"/> 
      </div>
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
