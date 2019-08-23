import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(1)
  }
}));

/*

{
      id: 'malvern',
      name: 'Malvern',
      description: 'iRelief Services Private Limited is an Aggregator for Healthcare Services. The company\'s Headquarters\' is located in Bangalore, Karnataka. iRelief provides innovative technology solution based services in the domain of healthcare ranging from ambulance, blood bank, homecare and pharmacy services.',
      tech: ['Python', 'Django', 'Angular5'],
      homepage: '',
      repo: ''
    }
 */

export default function Project(props) {
  const { details } = props;
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h5"> {details.name} </Typography>
      <Typography variant="body1"> {details.description} </Typography>

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
      <hr />
    </div>
  );
}
