import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyle = makeStyles(theme => ({
  project: {
    marginBottom: '2em'
  }
}));

export default function Experience(props) {
  const classes = useStyle();
  const { exp } = props;

  return (
    <div>
      <Typography component="div">
        <Box fontSize={18} fontWeight="fontWeightNormal" display="inline">
          {exp.duration}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box fontSize={18} fontWeight="fontWeightLight" display="inline">
          {exp.designation} at {exp.company}
        </Box>
      </Typography>

      {exp.projects.map(p => (
        <Typography component="div" className={classes.project}>
          <Box fontSize={20} fontWeight="fontWeightLight">
            {p.title}
          </Box>
          <Box fontSize={16} fontWeight="fontWeightLight">
            {p.description}
          </Box>
        </Typography>
      ))}
    </div>
  );
}
