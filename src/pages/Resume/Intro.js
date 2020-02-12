import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';
import FilePdfOutline from 'mdi-material-ui/FilePdfOutline';
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
  },
  pdfLogo: {
    color: '#e24045'
  }
}));

function Intro(props) {
  const classes = useStyle();
  const { details } = props;

  const resumeUrl = process.env.PUBLIC_URL + '/resume.pdf';

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
            {details.name}
          </Box>
          <Box fontSize={20} fontWeight="fontWeightLight" m={0}>
            {details.designation}
          </Box>
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography component="div" align="right">
          <Box fontSize={17} fontWeight="fontWeightLight">
            {details.mobile}
          </Box>
          <Box fontSize={17} fontWeight="fontWeightLight">
            {details.email}
          </Box>
          <Box fontSize={17} fontWeight="fontWeightLight">
            {details.website}
          </Box>
          <Box fontSize={15} fontWeight="fontWeightLight" displayPrint="none">
            <Link href={resumeUrl} className={classes.link} target="_blank">
              <FilePdfOutline className={classes.pdfLogo} /> PDF Version
            </Link>
          </Box>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Intro;
