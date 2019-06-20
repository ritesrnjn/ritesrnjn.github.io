import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    borderTop: '3px solid #27A822'
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    textDecoration: 'none',
    color: '#636363'
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    boxShadow: 'none'
  },
  grow: {
    flexGrow: 1
  },
  active: {
    color: theme.palette.primary.main
  }
}));

export default function MainNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary" className={classes.appBar}>
        <Toolbar>
          <div style={{ flex: 1 }}></div>
          <NavLink
            exact
            to="/"
            className={classes.menuButton}
            activeClassName={classes.active}
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/projects"
            className={classes.menuButton}
            activeClassName={classes.active}
          >
            Projects
          </NavLink>
          <NavLink
            exact
            to="/resume"
            className={classes.menuButton}
            activeClassName={classes.active}
          >
            Resume
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
