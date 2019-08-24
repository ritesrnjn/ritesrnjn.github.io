import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import ItemList from '../../components/ItemList';

const useStyle = makeStyles(theme => ({
  section: {
    marginBottom: '1em'
  },
  details: {
    marginLeft: '4em'
  }
}));

export default function Spare(props) {
  const { spare } = props;
  const classes = useStyle();
  return (
    <div className={classes.section}>
      <Typography component="div">
        <Box fontSize={20} fontWeight="fontWeightLight">
          {spare.title}
        </Box>
        <Box fontSize={17} fontWeight="fontWeightLight">
          {spare.desc}
        </Box>

        <div className={classes.details}>
          {spare.repo && (
            <Box fontSize={17} fontWeight="fontWeightLight">
              Git: {spare.repo}
            </Box>
          )}
        </div>

        <div className={classes.details}>
          {spare.stack && (
            <Box fontSize={16} fontWeight="fontWeightLight">
              <div>
                {spare.stack.map((item, i) => (
                  <ItemList index={i} items={spare.stack} />
                ))}
              </div>
            </Box>
          )}
        </div>
      </Typography>
    </div>
  );
}
