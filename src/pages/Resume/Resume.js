import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

// data
import experience from '../../config/experience';
import education from '../../config/education';
import skills from '../../config/skills';
import spare from '../../config/spare';
import details from '../../config/personalDetails';

// Sections
import Intro from './Intro';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Spare from './Spare';
import PersonalDetails from './PersonalDetails';

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
    <Typography color="primary">
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
      <Intro />
      <Divider />

      <Grid container className={classes.item}>
        <Grid item sm={3} lg={2}>
          <Item title="Experience" />
        </Grid>
        <Grid item sm={9} lg={10}>
          {experience.map(exp => (
            <Experience exp={exp} />
          ))}
        </Grid>
      </Grid>

      {/* Education */}
      <Grid container className={classes.item}>
        <Grid item sm={3} lg={2}>
          <Item title="Education" />
        </Grid>
        <Grid item sm={9} lg={10}>
          {education.map(edu => (
            <Education edu={edu} />
          ))}
        </Grid>
      </Grid>

      <Grid container className={classes.item}>
        <Grid item sm={3} lg={2}>
          <Item title="Skills" />
        </Grid>
        <Grid item sm={9} lg={10}>
          <Skills skills={skills} />
        </Grid>
      </Grid>

      <Grid container className={classes.item}>
        <Grid item sm={3} lg={2}>
          <Item title="Spare Time" />
        </Grid>
        <Grid item sm={9} lg={10}>
          {spare.map(spare => (
            <Spare spare={spare} />
          ))}
        </Grid>
      </Grid>

      <Grid container className={classes.item}>
        <Grid item sm={3} lg={2}>
          <Item title="Personal Details" />
        </Grid>
        <Grid item sm={9} lg={10}>
          <PersonalDetails details={details} />
        </Grid>
      </Grid>

      <Divider style={{ marginTop: '2em' }} />

      <Typography component="div" align="center">
        <Box
          fontSize={16}
          fontWeight="fontWeightLight"
          className={classes.footer}
        >
          last update: August 2019
        </Box>
      </Typography>
    </Container>
  );
}
