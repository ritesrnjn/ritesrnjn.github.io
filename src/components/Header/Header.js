import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  header: {
    borderTop: '3px solid #27A822'
  }
};

function Header({ classes }) {
  return <div className={classes.header} />;
}

export default withStyles(styles)(Header);
