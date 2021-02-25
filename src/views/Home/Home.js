import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import myPic from '../../assets/img/me.jpg';
import Social from './Social';
import contact from '../../config/contact';

const useStyle = makeStyles((theme) => ({
  bigAvatar: {
    margin: 10,
    width: 190,
    height: 190,
  },
  name: {
    fontWeight: 300,
    marginTop: 10,
    marginBottom: 10,
  },
  textMuted: {
    fontWeight: 300,
    color: '#6b6b6b',
  },
}));

function Home() {
  const classes = useStyle();
  return (
    <Grid container direction="column" alignItems="center">
      <Avatar alt="Ritesh" src={myPic} className={classes.bigAvatar} />

      <Typography variant="h4" className={classes.name}>
        {contact.name}
      </Typography>

      <Typography variant="subtitle1" className={classes.textMuted}>
        {contact.about}
      </Typography>

      <Social className={classes.social} />
    </Grid>
  );
}

export default Home;
