import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// data
import experience from '../../config/experience';
import education from '../../config/education';
import skills from '../../config/skills';
import details from '../../config/personalDetails';

// Sections
import Intro from './Intro';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import PersonalDetails from './PersonalDetails';

const useStyle = makeStyles(theme => ({
  root: {
    marginTop: '5em'
  },
  intro: {
    marginBottom: '2em'
  },
  designation: {
    paddingLeft: 4,
    fontWeight: 300
  },
  personalInfo: {
    fontWeight: 300,
    textAlign: 'right'
  }
}));

export default function Resume() {
  const classes = useStyle();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Intro />

      {/* Experience */}
      <Grid container>
        <Grid item sm={3} lg={2}>
          <Typography color="primary">
            <Box fontSize={20} fontWeight="fontWeightLight">
              Experience
            </Box>
          </Typography>
        </Grid>
        <Grid item sm={9} lg={10}>
          {experience.map(exp => (
            <Experience exp={exp} />
          ))}
        </Grid>
      </Grid>

      {/* Education */}
      <Grid container>
        <Grid item sm={3} lg={2}>
          <Typography color="primary">
            <Box fontSize={20} fontWeight="fontWeightLight">
              Education
            </Box>
          </Typography>
        </Grid>
        <Grid item sm={9} lg={10}>
          {education.map(edu => (
            <Education edu={edu} />
          ))}
        </Grid>
      </Grid>

      <Grid container>
        <Grid item sm={3} lg={2}>
          <Typography color="primary">
            <Box fontSize={20} fontWeight="fontWeightLight">
              Skills
            </Box>
          </Typography>
        </Grid>
        <Grid item sm={9} lg={10}>
          <Skills skills={skills} />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item sm={3} lg={2}>
          <Typography variant="subtitle1" color="primary">
            Spare
          </Typography>
        </Grid>
        <Grid item sm={9} lg={10}></Grid>
      </Grid>

      <Grid container>
        <Grid item sm={3} lg={2}>
          <Typography color="primary">
            <Box fontSize={20} fontWeight="fontWeightLight">
              Personal Details
            </Box>
          </Typography>
        </Grid>
        <Grid item sm={9} lg={10}>
          <PersonalDetails details={details} />
        </Grid>
      </Grid>
    </Container>
  );
}
