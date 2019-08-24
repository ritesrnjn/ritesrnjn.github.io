import React from 'react';
import Box from '@material-ui/core/Box';

export default function ItemList(props) {
  const { index, items } = props;

  let itemName =
    index === items.length - 1 ? items[index] : `${items[index]} – `;
  return (
    <Box fontSize={17} fontWeight="fontWeightLight" display="inline">
      {itemName}
    </Box>
  );
}
