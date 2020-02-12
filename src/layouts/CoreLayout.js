import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// Components
import MainNav from '../layouts/MainNav';
import RedirectAs404 from '../pages/NoMatch/RedirectAs404';
import globalStyles from '../styles/global';

import Home from '../pages/Home';
import Projects from '../pages/Projects';

const useStyles = makeStyles(theme => ({
  ...globalStyles,
  container: {
    [theme.breakpoints.up('lg')]: {
      width: 1170
    }
  }
}));

export default function CoreLayout() {
  const classes = useStyles();
  return (
    <Grid>
      <MainNav />

      <Grid
        container
        justify="center"
        alignItems="center"
        direction={'column'}
        style={{ minHeight: 'calc(100vh - 67px)' }}
      >
        <Grid container className={classes.container} alignItems="center">
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route path={'/projects'} component={Projects} />
            <Route component={RedirectAs404} />
          </Switch>
        </Grid>
      </Grid>
    </Grid>
  );
}
