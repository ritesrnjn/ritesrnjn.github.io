import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function PersonalDetails(props) {
  const { details } = props;

  return (
    <Typography component="div">
      {details.map(d => (
        <div key={d.name}>
          <Box fontSize={18} fontWeight="fontWeightLight" display="inline">
            {d.name}: &nbsp;{d.value}
          </Box>
        </div>
      ))}
    </Typography>
  );
}
