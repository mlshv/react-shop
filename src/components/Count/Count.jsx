import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

const Count = ({ count, onIncrement, onDecrement }) => (
  <React.Fragment>
    <IconButton size="small" onClick={onDecrement}>
      <KeyboardArrowLeft />
    </IconButton>
    {count}
    <IconButton size="small" onClick={onIncrement}>
      <KeyboardArrowRight />
    </IconButton>
  </React.Fragment>
);

export default Count;
