import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
          { <Link style={linkStyle} to ="/"><Button color="inherit">Warmer</Button></Link> }

          </Typography>
          { <Link style={linkStyle} to ="/about"><Button color="inherit">About</Button></Link> }
          { <Link style={linkStyle} to ="/how"><Button color="inherit">Prevent</Button></Link> }
          { <Link style={linkStyle} to ="/profile"><Button color="inherit">Profile</Button></Link> }
        </Toolbar>
      </AppBar>
    </div>
  );
}