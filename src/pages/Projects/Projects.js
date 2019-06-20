import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  bigAvatar: {
    margin: 10,
    width: 190,
    height: 190
  },
  textMuted: {
    color: '#6b6b6b'
  }
}));

export default function Resume() {
  const classes = useStyle();
  return (
    <Grid container>
      <Typography variant="h1">Projects</Typography>
    </Grid>
  );
}
