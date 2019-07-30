import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import CustomizedDialogs from './CustomizedDialogs';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    textAlign: 'center',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<MenuIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
    <CustomizedDialogs />
          {/* <Typography className={classes.heading}>Warmer</Typography> */}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          { <Link to ="/"><Button color="inherit">Home</Button></Link> }
          { <Link to ="/about"><Button color="inherit">About</Button></Link> }
          { <Link to ="/how"><Button color="inherit">Prevent</Button></Link> }
          { <Link to ="/profile"><Button color="inherit">Profile</Button></Link> }
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    
    </div>
  );
}