import React from 'react';
import InfoCards from './InfoCards';


export default function About(props) {
    // const layoutStyles = {
    //   display: 'flex',
    //   flexDirection: 'row',
    //   flexWrap: 'wrap',
    //   justifyContent: 'center',

    // }
    // const divStyles = {
    //     // color: "white",
    //     // backgroundColor: '#0000006b',
    //     // width: '250px',
    //     margin: '100px auto'
    //   }
    // const pStyles = {
    //   padding: '15px',
    //   margin: '0 auto',
    // }
    return (
      <div>
        <h1 style={{textAlign: 'center', }}>Why is stopping climate change so important?</h1>
        <InfoCards />
        </div>

    )
};
