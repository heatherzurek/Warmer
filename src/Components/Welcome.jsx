import React from 'react';
import Intro from './Intro';

export default function Welcome(props) {
      const divStyles = {
        margin: '0 auto',
        padding: '10px',
      }
    return (
    <div style={divStyles}>
      <h1>Welcome, </h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, blanditiis nemo! Odio pariatur quod aut officiis suscipit reiciendis a maxime, voluptatibus ratione modi provident! Delectus a esse inventore quam numquam?</p>

      <Intro />
    </div>

    )
};
