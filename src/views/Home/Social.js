import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import Twitter from 'mdi-material-ui/Twitter';
import Github from 'mdi-material-ui/Github';
import Email from 'mdi-material-ui/Email';
import Bitbucket from 'mdi-material-ui/Bitbucket';
import StackOverflow from 'mdi-material-ui/StackOverflow';
import Linkedin from 'mdi-material-ui/Linkedin';

import social from '../../config/social';

const useStyles = makeStyles((theme) => ({
  social: {
    margin: 30,
  },
  socialIcon: {
    fontSize: '2em',
    margin: 10,
    color: '#AAB8C2',
  },
  twitter: {
    '&:hover': {
      color: '#1DA1F2',
    },
  },
  github: {
    '&:hover': {
      color: '#333333',
    },
  },
  email: {
    '&:hover': {
      color: '#1DA1F2',
    },
  },
  bitbucket: {
    '&:hover': {
      color: '#205081',
    },
  },
  stackoverflow: {
    '&:hover': {
      color: '#F48024',
    },
  },
  linkedin: {
    '&:hover': {
      color: '#0077B5',
    },
  },
}));

function Social() {
  const classes = useStyles();

  return (
    <div className={classes.social}>
      {social.twitter && (
        <a href={`http://twitter.com/${social.twitter}`} target='_blank'>
          <Twitter className={classNames(classes.socialIcon, classes.twitter)} />
        </a>
      )}
      {social.github && (
        <a href={`http://github.com/${social.github}`} target='_blank'>
          <Github className={classNames(classes.socialIcon, classes.github)} />
        </a>
      )}
      {social.email && (
        <a href={`mailto:${social.email}`}>
          <Email className={classNames(classes.socialIcon, classes.email)} />
        </a>
      )}
      {social.bitbucket && (
        <a href={`https://bitbucket.org/${social.bitbucket}`} target='_blank'>
          <Bitbucket className={classNames(classes.socialIcon, classes.bitbucket)} />
        </a>
      )}
      {social.stackoverflow && (
        <a href={`http://stackoverflow.com/${social.stackoverflow}`} target='_blank'>
          <StackOverflow className={classNames(classes.socialIcon, classes.stackoverflow)} />
        </a>
      )}
      {social.linkedin && (
        <a href={`http://linkedin.com/in/${social.linkedin}`} target='_blank'>
          <Linkedin className={classNames(classes.socialIcon, classes.linkedin)} />
        </a>
      )}
    </div>
  );
}

export default Social;
