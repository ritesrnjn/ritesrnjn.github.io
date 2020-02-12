import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

// data
import experience from '../../config/experience';
import education from '../../config/education';
import skills from '../../config/skills';
import spare from '../../config/spare';
import personalDetails from '../../config/personalDetails';

// Sections
import Intro from './Intro';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Spare from './Spare';
import PersonalDetails from './PersonalDetails';
import contact from '../../config/contact';

const useStyle = makeStyles(theme => ({
  root: {
    marginTop: '3em',
    marginBottom: '2em'
  },
  item: {
    marginTop: '2em'
  },
  footer: { marginTop: '2em', color: '#a2a2a2' }
}));

function Item(props) {
  const { title } = props;
  return (
    <Typography component="div" color="primary">
      <Box fontSize={22} fontWeight="fontWeightLight">
        {title}
      </Box>
    </Typography>
  );
}

export default function Resume() {
  const classes = useStyle();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Intro details={contact} />
      <Divider />

      <Grid container className={classes.item}>
        <Grid item xs={12} md={2}>
          <Item title="Experience" />
        </Grid>
        <Grid item xs={12} md={10}>
          {experience.map(exp => (
            <Experience key={exp.duration} exp={exp} />
          ))}
        </Grid>
      </Grid>

      {/* Education */}
      <Grid container className={classes.item}>
        <Grid item xs={12} md={2}>
          <Item title="Education" />
        </Grid>
        <Grid item xs={12} md={10}>
          {education.map(edu => (
            <Education key={edu.begin} edu={edu} />
          ))}
        </Grid>
      </Grid>

      <Grid container className={classes.item}>
        <Grid item xs={12} md={2}>
          <Item title="Skills" />
        </Grid>
        <Grid item xs={12} md={10}>
          <Skills skills={skills} />
        </Grid>
      </Grid>

      <Grid container className={classes.item}>
        <Grid item xs={12} md={2}>
          <Item title="Spare Time" />
        </Grid>
        <Grid item xs={12} md={10}>
          {spare.map(spare => (
            <Spare key={spare.title} spare={spare} />
          ))}
        </Grid>
      </Grid>

      <Grid container className={classes.item}>
        <Grid item xs={12} md={2}>
          <Item title="Personal Details" />
        </Grid>
        <Grid item xs={12} md={10}>
          <PersonalDetails details={personalDetails} />
        </Grid>
      </Grid>

      <Divider style={{ marginTop: '2em' }} />

      <Typography component="div" align="center">
        <Box
          fontSize={16}
          fontWeight="fontWeightLight"
          className={classes.footer}
        >
          last update: February 2020
        </Box>
      </Typography>
    </Container>
  );
}
