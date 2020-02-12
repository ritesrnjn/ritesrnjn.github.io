import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import RatingStars from './RatingStars';

const useStyle = makeStyles(theme => ({
  section: {
    marginBottom: '1em'
  },
  rating: {
    width: '100%',
    display: 'flex'
  }
}));

export default function Skills(props) {
  const { skills } = props;
  const classes = useStyle();
  return (
    <div>
      <Typography>
        <Box fontSize={18} fontWeight="fontWeightNormal" display="inline">
          {'Software engineering & web development'}
        </Box>
      </Typography>
      <div className={classes.section}>
        <Typography component="div">
          <Box fontSize={20} fontWeight="fontWeightLight">
            {skills.languages.title}
          </Box>

          <div className={classes.rating}>
            <RatingStars stars={4} /> &nbsp;&nbsp;
            <Box fontSize={17} fontWeight="fontWeightLight" display="inline">
              {skills.languages.advanced.join(', ')}
            </Box>
          </div>

          <div className={classes.rating}>
            <RatingStars stars={3} />
            &nbsp;&nbsp;
            <Box fontSize={17} fontWeight="fontWeightLight" display="inline">
              {skills.languages.intermediate.join(', ')}
            </Box>
          </div>

          <div className={classes.rating}>
            <RatingStars stars={1} /> &nbsp;&nbsp;
            <Box fontSize={17} fontWeight="fontWeightLight" display="inline">
              {skills.languages.beginner.join(', ')}
            </Box>
          </div>
        </Typography>
      </div>

      <div className={classes.section}>
        <Typography component="div">
          <Box fontSize={20} fontWeight="fontWeightLight">
            {skills.web.title}
          </Box>
          {skills.web.tech.map(t => (
            <div>
              <Box fontSize={17} fontWeight="fontWeightLight" display="inline">
                {t.join(' – ')}
              </Box>
            </div>
          ))}
        </Typography>
      </div>

      <div className={classes.section}>
        <Typography component="div">
          <Box fontSize={20} fontWeight="fontWeightLight" display="inline">
            {skills.other.title}
          </Box>
          {skills.other.tech.map(t => (
            <div>
              <Box fontSize={17} fontWeight="fontWeightLight" display="inline">
                {t.join(' – ')}
              </Box>
            </div>
          ))}
        </Typography>
      </div>
    </div>
  );
}
