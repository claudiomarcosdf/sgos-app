import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

const styles = (props) => ({
  root: {
    height: 4,
    background: '#D980FA',
    '& .MuiLinearProgress-bar': {
      backgroundColor: '#9c27b0'
    }
  }
  // root: {
  //   '& .MuiLinearProgress-colorPrimary': {
  //     backgroundColor: '#9b59b6'
  //   },
  //   '& .MuiLinearProgress-barColorPrimary': {
  //     backgroundColor: '#cd84f1'
  //   }
  // }
});

function ProgressBar() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return <LinearProgress className={classes.root} />;
}

export default ProgressBar;
