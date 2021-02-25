import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

const StyledRating = withStyles({
  iconFilled: {
    color: 'rgb(39, 168, 34)',
  },
})(Rating);

export default function RatingStars(props) {
  const { stars } = props;
  return (
    <StyledRating
      name="half-rating"
      value={stars}
      precision={0.5}
      readOnly
      emptyIcon={<StarBorderIcon fontSize="inherit" />}
    />
  );
}
