import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyle = makeStyles(theme => ({
  project: {
    marginBottom: '2em'
  }
}));

export default function Education(props) {
  const classes = useStyle();
  const { edu } = props;

  return (
    <div>
      <Typography component="div">
        <Box fontSize={18} fontWeight="fontWeightNormal" display="inline">
          {edu.begin} to {edu.end}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box fontSize={18} fontWeight="fontWeightLight" display="inline">
          {edu.degree} in {edu.stream}
        </Box>
        <Box fontSize={18} fontWeight="fontWeightLight">
          {edu.school},
        </Box>
        <Box fontSize={18} fontWeight="fontWeightLight">
          {edu.university}, {edu.location}
        </Box>
      </Typography>
    </div>
  );
}
