import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';

const Pagination = ({ page, onRequestPrevPage, onRequestNextPage }) => (
  <Typography variant="body1" color="textPrimary" component="p">
    Page:
    <IconButton size="small" onClick={onRequestPrevPage} disabled={page === 1}>
      <KeyboardArrowLeft />
    </IconButton>
    {page}
    <IconButton size="small" onClick={onRequestNextPage}>
      <KeyboardArrowRight />
    </IconButton>
  </Typography>
);

export default Pagination;
