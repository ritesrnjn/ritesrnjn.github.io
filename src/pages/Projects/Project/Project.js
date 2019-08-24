import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: '2em'
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

export default function Project(props) {
  const { details } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography component="div">
        <Box
          fontSize={20}
          fontWeight="fontWeightBold"
          color="primary.main"
          display="inline"
        >
          {details.name}
        </Box>
        <Box fontSize={20} fontWeight="fontWeightLight">
          {details.description}
        </Box>
      </Typography>

      {details.homepageUrl && (
        <div>
          <a href={details.homepage}> view homepage</a>
        </div>
      )}

      {details.repoUrl && (
        <div>
          <a href={details.repoUrl}> view repo </a>
        </div>
      )}

      {details.techStack.length > 0 && (
        <div>
          <Typography variant="body1">Tech Stack</Typography>
          {details.techStack.map(t => (
            <Chip
              variant="outlined"
              color="primary"
              label={t}
              className={classes.chip}
            />
          ))}
        </div>
      )}
    </div>
  );
}
