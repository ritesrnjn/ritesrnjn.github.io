import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import projects from 'src/config/projects';
import Project from './Project';

export default function Resume() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>
      {projects.map((p) => (
        <Project key={p.id} details={p} />
      ))}
    </Container>
  );
}
