import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import myPic from '../../assets/img/me.jpg';
import Typography from '@material-ui/core/Typography';
import Social from '../../components/Social';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  bigAvatar: {
    margin: 10,
    width: 190,
    height: 190
  },
  textMuted: {
    color: '#6b6b6b'
  }
}));

export default function Home() {
  const classes = useStyle();
  return (
    <Grid container direction="column" alignItems="center">
      <Avatar alt="Ritesh" src={myPic} className={classes.bigAvatar} />

      <Typography variant="h4">Ritesh Ranjan</Typography>

      <Typography variant="subtitle1" className={classes.textMuted}>
        Designer, developer, painter, and overall a pretty nice guy
      </Typography>

      <Social className={classes.social} />
    </Grid>
  );
}
