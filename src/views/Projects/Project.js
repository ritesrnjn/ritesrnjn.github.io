import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '4em',
    marginBottom: '4em'
  },
  projectContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    marginTop: theme.spacing(2)
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: 28,
    fontWeight: 300,
    textAlign: 'center'
  },
  techStack: {
    marginTop: 10
  },
  chip: {
    display: 'inline',
    background: theme.palette.primary.main,
    color: '#fff',
    margin: 2,
    padding: '3px 6px',
    fontSize: 14,
    fontWeight: 300,
    borderRadius: 2
  },
  img: {
    width: '100%',
    border: '1px solid #ebebeb',
    borderRadius: 3
  }
}));

export default function Project(props) {
  const { details } = props;
  const classes = useStyles();

  function getImgSrc(fileName) {
    return process.env.PUBLIC_URL + '/projects/' + fileName;
  }

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography className={classes.title}>
              {details.name}
            </Typography>
          </Grid>
          <Grid item md={6}>
            <img
              className={classes.img}
              src={getImgSrc(details.img)}
              alt={details.id}
            />
          </Grid>
          <Grid item md={6}>
            <div className={classes.projectContainer}>
              <Typography component="div">
                <Box fontSize={15} fontWeight="fontWeightLight">
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
                <div className={classes.techStack}>
                  {details.techStack.map(t => (
                    <div className={classes.chip}>{t}</div>
                  ))}
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </div>
      <Divider variant="middle" />
    </div>
  );
}
