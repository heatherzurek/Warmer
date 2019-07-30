import React from 'react';

export default function Footer(props) {
    const divStyles = {
      backgroundColor: 'black',
      height: '100px',
      color: 'white',
      textAlign: 'center',
      }
    return (
        <div style={divStyles}>
          <h6>Warmer | heather.zurek@gmail.com | 2019</h6>
        </div>
    )
};
