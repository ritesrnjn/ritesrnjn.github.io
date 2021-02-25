import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function Education(props) {
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
