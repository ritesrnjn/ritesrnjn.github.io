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
      <Typography component="div" style={{marginBottom: '.5em'}}>
        <Box fontSize={18} fontWeight="fontWeightNormal" display="inline">
          {exp.duration}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box fontSize={18} fontWeight="fontWeightLight" display="inline">
          {exp.designation} at {exp.company}
        </Box>
        <Box fontWeight="fontWeightLight">{exp.helpText}</Box>
      </Typography>

      {exp.projects.map(project => (
        <Typography
          key={project.title}
          component="div"
          className={classes.project}
        >
          <Box fontSize={20} fontWeight="fontWeightLight">
            {project.title}
          </Box>
          <Box fontSize={15} fontWeight="fontWeightLight">
            {project.description}
          </Box>
          {project.list &&
          project.list.map(i => (
              <Box
                key={i}
                fontSize={15}
                fontWeight="fontWeightLight"
                style={{ marginLeft: '1em' }}
              >
                {i}
              </Box>
            ))}
          <Box
            fontSize={15}
            fontWeight="fontWeightLight"
            style={{ marginLeft: '2em', color:'#777777' }}
          >
            {project.techStack.join(' – ')}
          </Box>
        </Typography>
      ))}
    </div>
  );
}
