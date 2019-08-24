import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Data
import projects from '../../config/projects';

//Component
import Project from './Project';

const useStyle = makeStyles(theme => ({}));

export default function Resume() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom>
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
