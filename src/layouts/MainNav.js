import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderTop: '3px solid #27A822',
  },
  menuItem: {
    marginLeft: theme.spacing(2),
    textDecoration: 'none',
    color: '#636363',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  grow: {
    flexGrow: 1,
  },
  active: {
    color: theme.palette.primary.main,
  },
}));

const links = [
  {
    id: 'home',
    to: '/',
    title: 'Home',
  },
  {
    id: 'projects',
    to: '/projects',
    title: 'Projects',
  },
  {
    id: 'resume',
    to: '/resume',
    title: 'Resume',
  },
];

export default function MainNav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary" elevation={0}>
        <Toolbar>
          <div className={classes.grow} />
          {links.map((link) => (
            <NavLink key={link.id} exact to={link.to} className={classes.menuItem} activeClassName={classes.active}>
              {link.title}
            </NavLink>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
