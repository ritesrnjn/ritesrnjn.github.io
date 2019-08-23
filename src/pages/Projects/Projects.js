import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Project from './Project';

const useStyle = makeStyles(theme => ({}));

export default function Resume() {
  const classes = useStyle();

  const projects = [
    {
      id: 'mojojo',
      name: 'Mojojo',
      description:
        'MOJOJO is a marketplace which connects people with Salons, Spas, Tattoo Studios, Nail Studios & Stylists.',
      techStack: ['PHP', 'AngularJS', 'MySQL', 'Redis', 'Laravel'],
      homepageUrl: '',
      repoUrl: ''
    },
    {
      id: 'irelief',
      name: 'iRelief Medical Services',
      description:
        "iRelief Services Private Limited is an Aggregator for Healthcare Services. The company's Headquarters' is located in Bangalore, Karnataka. iRelief provides innovative technology solution based services in the domain of healthcare ranging from ambulance, blood bank, homecare and pharmacy services.",
      techStack: ['Python', 'Django', 'Angular5'],
      homepageUrl: '',
      repoUrl: ''
    },
    {
      id: 'malvern',
      name: 'Malvern',
      description:
        "iRelief Services Private Limited is an Aggregator for Healthcare Services. The company's Headquarters' is located in Bangalore, Karnataka. iRelief provides innovative technology solution based services in the domain of healthcare ranging from ambulance, blood bank, homecare and pharmacy services.",
      techStack: ['Python', 'Django', 'Angular5'],
      homepageUrl: '',
      repoUrl: ''
    }
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom>
          Projects
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {projects.map(p => (
          <Project key={p.id} details={p} />
        ))}
      </Grid>
    </Grid>
  );
}
