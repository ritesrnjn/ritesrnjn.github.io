import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import globalStyles from 'styles/global';

import BackgroundImg from 'assets/images/404.png';

const styles = {
  ...globalStyles,
  root: {
    flexGrow: 1,
  },
  MainNav: {
    display: 'none',
  },
  h1: {
    color: '#d3062b',
    fontSize: 150,
    fontWeight: 900,
  },
  fullContainer: {
    backgroundColor: '#121212',
    paddingTop: 160,
    paddingLeft: 150,
    backgroundImage: `url(${BackgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: 'cover',
    overflowX: 'hidden',
    overflowY: 'hidden',
    height: 923,
  },
  h2: {
    fontSize: 30,
    fontWeight: 600,
    marginBottom: 120,
    position: 'relative',
    bottom: 150,
  },
  rootLink: {
    backgroundColor: '#d3062b',
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 600,
    padding: '17px 107px',
    textDecoration: 'none',
    position: 'relative',
    bottom: 200,
  },
};

function NoMatch(props) {
  const { classes } = props;

  return (
    <Grid container className={classes.fullContainer} justify="center">
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="h1" classes={{ h1: classes.h1 }}>
            404
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" classes={{ h2: classes.h2 }}>
            Oops! seems like this route doesn't exist.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Link to="/" className={classes.rootLink}>
            Go Back
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(NoMatch);
