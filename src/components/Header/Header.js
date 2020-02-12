import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    borderTop: '3px solid #27A822'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    boxShadow: 'none'
  },
  grow: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary" className={classes.appBar}>
        <Toolbar>
          <div style={{ flex: 1 }}></div>
          <Button
            component={props => (
              <Link to="/" {...props}>
                Home
              </Link>
            )}
            linkButton={true}
          />
          <Button
            component={props => (
              <Link to="/" {...props}>
                Projects
              </Link>
            )}
            linkButton={true}
          />
          <Button
            component={props => (
              <Link to="/" {...props}>
                Resume
              </Link>
            )}
            linkButton={true}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
