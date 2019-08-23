import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function Spare(props) {
  const { spare } = props;

  return (
    <div>
      <Typography component="div">
        <Box fontSize={18} fontWeight="fontWeightLight">
          {spare.title}
        </Box>
        <Box fontSize={18} fontWeight="fontWeightLight">
          {spare.desc}
        </Box>
      </Typography>
    </div>
  );
}
