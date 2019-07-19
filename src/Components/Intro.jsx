import React from 'react';

export default function Intro(props) {
    const divStyles = {
        color: "black",
        textAlign: 'center',
        // border: '1px solid black',
      }
    return (
        <div style={divStyles}>
        <h1>Warmer</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quia provident, quaerat error et consequuntur sequi corporis nobis praesentium deleniti? Quae obcaecati est a vitae voluptatem iure ut, ipsam quibusdam.</p>
        </div>
    )
};