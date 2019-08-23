import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  intro: {
    marginBottom: '2em'
  },
  designation: {
    paddingLeft: 4,
    fontWeight: 300
  }
}));

export default function Intro(props) {
  const classes = useStyle();

  return (
    <Grid container className={classes.intro}>
      <Grid item xs={6}>
        <Typography component="div">
          <Box
            fontSize={54}
            fontWeight="fontWeightLight"
            color="primary.main"
            m={0}
          >
            Ritesh Ranjan
          </Box>
          <Box fontSize={24} fontWeight="fontWeightLight" m={0}>
            Full Stack Developer
          </Box>
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography component="div" align="right">
          <Box fontSize={18} fontWeight="fontWeightLight">
            (+91) 8861 089 200
          </Box>
          <Box fontSize={18} fontWeight="fontWeightLight">
            ritesrnjn@gmail.com
          </Box>
          <Box fontSize={18} fontWeight="fontWeightLight">
            http://ranjanritesh.com
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}
