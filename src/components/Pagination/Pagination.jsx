import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Count } from '../Count';

const Pagination = ({ page, onRequestPrevPage, onRequestNextPage }) => (
  <Typography variant="body1" color="textPrimary" component="p">
    Page:
    <Count
      count={page}
      onIncrement={onRequestNextPage}
      onDecrement={onRequestPrevPage}
    />
  </Typography>
);

export default Pagination;
