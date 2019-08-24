import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import { FilePdfOutline } from 'mdi-material-ui';
import Link from '@material-ui/core/Link';

const useStyle = makeStyles(theme => ({
  intro: {
    marginBottom: '3em'
  },
  designation: {
    paddingLeft: 4,
    fontWeight: 300
  },
  link: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
}));

export default function Intro(props) {
  const classes = useStyle();

  return (
    <Grid container className={classes.intro}>
      <Grid item xs={6}>
        <Typography component="div">
          <Box
            fontSize={45}
            fontWeight="fontWeightLight"
            color="primary.main"
            m={0}
          >
            Ritesh Ranjan
          </Box>
          <Box fontSize={20} fontWeight="fontWeightLight" m={0}>
            Full Stack Developer
          </Box>
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography component="div" align="right">
          <Box fontSize={17} fontWeight="fontWeightLight">
            (+91) 8861 089 200
          </Box>
          <Box fontSize={17} fontWeight="fontWeightLight">
            ritesrnjn@gmail.com
          </Box>
          <Box fontSize={17} fontWeight="fontWeightLight">
            http://ranjanritesh.com
          </Box>
          <Box fontSize={15} fontWeight="fontWeightLight">
            <Link href={'javascript:;'} className={classes.link}>
              <FilePdfOutline style={{ color: '#e24045' }} /> PDF Version
            </Link>
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}
