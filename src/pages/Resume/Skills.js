import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Item(props) {
  const { index, items } = props;

  let itemName =
    index === items.length - 1 ? items[index] : `${items[index]} – `;
  return (
    <Box fontSize={18} fontWeight="fontWeightLight" display="inline">
      {itemName}
    </Box>
  );
}

export default function Skills(props) {
  const { skills } = props;

  return (
    <div>
      <div>
        <Typography variant="body1">{skills.languages.title}</Typography>
      </div>

      <div>
        <Typography variant="body1">{skills.web.title}</Typography>
        <Typography component="div">
          {skills.web.tech.map(t => (
            <div>
              {t.map((item, i) => (
                <Item index={i} items={t} />
              ))}
            </div>
          ))}
        </Typography>
      </div>

      <div>
        <Typography variant="body1">{skills.other.title}</Typography>
        <Typography component="div">
          {skills.other.tech.map(t => (
            <div>
              {t.map((item, i) => (
                <Item index={i} items={t} />
              ))}
            </div>
          ))}
        </Typography>
      </div>
    </div>
  );
}
