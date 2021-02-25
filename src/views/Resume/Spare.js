import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles(theme => ({
  section: {
    marginBottom: '1em'
  },
  details: {
    marginLeft: '4em'
  }
}));

function Spare(props) {
  const { spare } = props;
  const classes = useStyle();
  return (
    <div className={classes.section}>
      <Typography component="div">
        <Box fontSize={20} fontWeight="fontWeightLight">
          {spare.title}
        </Box>
        <Box fontSize={15} fontWeight="fontWeightLight">
          {spare.desc}
        </Box>

        {spare.repo && (
          <Box
            fontSize={15}
            fontWeight="fontWeightLight"
            className={classes.details}
          >
            Git: {spare.repo}
          </Box>
        )}

        {spare.stack && (
          <Box
            fontSize={15}
            fontWeight="fontWeightLight"
            className={classes.details}
          >
            {spare.stack.join(' – ')}
          </Box>
        )}
      </Typography>
    </div>
  );
}

export default Spare;
