import React from 'react';

import { MuiThemeProvider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import globalStyles from 'styles/global';
import myPic from 'assets/img/me.jpg';

import Header from 'components/Header';
import Social from 'components/Social';

const styles = theme => ({
  ...globalStyles,
  container: {
    [theme.breakpoints.up('lg')]: {
      width: 1170
    },
    flexDirection: 'column'
  },
  bigAvatar: {
    margin: 10,
    width: 190,
    height: 190
  },
  textMuted: {
    color: '#6b6b6b'
  }
});

function App({ classes }) {
  return (
    <MuiThemeProvider>
      <div className="App">
        <Header />

        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: 'calc(100vh - 3px)' }}
        >
          <Grid container className={classes.container} alignItems="center">
            <Avatar alt="Ritesh" src={myPic} className={classes.bigAvatar} />

            <Typography variant="h4">Ritesh Ranjan</Typography>

            <Typography variant="subtitle1" className={classes.textMuted}>
              Designer, developer, painter, and overall a pretty nice guy
            </Typography>

            <Social className={classes.social} />
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
