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
    marginBottom: '2em',
  },
  item: {
    marginTop: '2em'
  },
  footer: { marginTop: '2em', color: '#a2a2a2' }
}));

function Section(props) {
  const classes = useStyle();
  const { title, children } = props;
  return(
    <Grid container className={classes.item}>
      <Grid item sm={2} style={{minWidth: 120}}>
        <Typography color="primary" variant="h6">
          {title}
        </Typography>
      </Grid>
      <Grid item sm={10}>
        {children}
      </Grid>
    </Grid>
  )
}

export default function Resume() {
  const classes = useStyle();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Intro details={contact} />
      <Divider />

      <Section title="Experience">
          {experience.map(exp => (
            <Experience key={exp.duration} exp={exp} />
          ))}
      </Section>

      <Section title="Education">
        {education.map(edu => (
          <Education key={edu.begin} edu={edu} />
        ))}
      </Section>

      <Section title="Skills">
        <Skills skills={skills} />
      </Section>

      <Section title="Spare Time">
        {spare.map(spare => (
          <Spare key={spare.title} spare={spare} />
        ))}
      </Section>

      <Section title="Personal Details">
        <PersonalDetails details={personalDetails} />
      </Section>

      <Divider style={{ marginTop: '2em' }} />

      <Typography component="div" align="center">
        <Box
          fontSize={16}
          fontWeight="fontWeightLight"
          className={classes.footer}
        >
          last update: February 2021<br/>
          online version: https://ranjanritesh.com/resume.pdf
        </Box>
      </Typography>
    </Container>
  );
}
