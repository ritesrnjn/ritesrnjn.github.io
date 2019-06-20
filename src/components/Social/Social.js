import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { social } from 'config';
import {
  Twitter,
  GithubCircle,
  Email,
  Bitbucket,
  StackOverflow,
  Linkedin
} from 'mdi-material-ui';

const useStyles = makeStyles(theme => ({
  social: {
    margin: 30
  },
  socialIcon: {
    fontSize: '2em',
    margin: 10,
    color: '#AAB8C2'
  },
  twitter: {
    '&:hover': {
      color: '#1DA1F2'
    }
  },
  github: {
    '&:hover': {
      color: '#333333'
    }
  },
  email: {
    '&:hover': {
      color: '#1DA1F2'
    }
  },
  bitbucket: {
    '&:hover': {
      color: '#205081'
    }
  },
  stackoverflow: {
    '&:hover': {
      color: '#F48024'
    }
  },
  linkedin: {
    '&:hover': {
      color: '#0077B5'
    }
  }
}));

function Social() {
  const classes = useStyles();
  const getPageLink = page => {
    switch (page) {
      case 'twitter':
        return 'http://twitter.com/' + social.twitter;
      case 'github':
        return 'http://github.com/' + social.github;
      case 'email':
        return 'mailto:' + social.email;
      case 'bitbucket':
        return 'https://bitbucket.org/' + social.bitbucket;
      case 'stackoverflow':
        return 'http://stackoverflow.com/' + social.stackoverflow;
      case 'linkedin':
        return 'http://linkedin.com/in/' + social.linkedin;
      default:
        return null;
    }
  };

  return (
    <div className={classes.social}>
      {social.twitter && (
        <a href={getPageLink('twitter')}>
          <Twitter
            className={classNames(classes.socialIcon, classes.twitter)}
          />
        </a>
      )}
      {social.github && (
        <a href={getPageLink('github')}>
          <GithubCircle
            className={classNames(classes.socialIcon, classes.github)}
          />
        </a>
      )}
      {social.email && (
        <a href={getPageLink('email')}>
          <Email className={classNames(classes.socialIcon, classes.email)} />
        </a>
      )}
      {social.bitbucket && (
        <a href={getPageLink('bitbucket')}>
          <Bitbucket
            className={classNames(classes.socialIcon, classes.bitbucket)}
          />
        </a>
      )}
      {social.stackoverflow && (
        <a href={getPageLink('stackoverflow')}>
          <StackOverflow
            className={classNames(classes.socialIcon, classes.stackoverflow)}
          />
        </a>
      )}
      {social.linkedin && (
        <a href={getPageLink('linkedin')}>
          <Linkedin
            className={classNames(classes.socialIcon, classes.linkedin)}
          />
        </a>
      )}
    </div>
  );
}

export default Social;
