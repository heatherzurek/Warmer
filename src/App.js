import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import ResponsiveDrawer from './Components/ResponsiveDrawer';

const useStyles = makeStyles(theme => ({
  container: {
    // backgroundColor: '#02152e',
    // color: '#319990',
    // width: '996px',
    // padding: '20px',
    // margin: '0 auto',
    // marginTop: '50px',
    // textAlign: 'center',
    // minHeight: 'calc(100vh - 84px)',
    // margin: '-20px',
    // flexDirection: 'row',
    // alignItems: 'center',
    // maxWidth: '996px',
    // margin: '0 auto',
    // justifyContent: 'space-between',

// eslint-disable-next-line
    // ['@media (max-width:780px)']: {
    //   flexDirection: 'column',
    //   alignItems: 'center',
    // }
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <ResponsiveDrawer />
      <h1>2</h1>
      <h1>3</h1>
      <h1>4</h1>
      <h1>5</h1>
      <h1>6</h1>

    </div>
  );
}

export default App;