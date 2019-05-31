import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import Fab from '@material-ui/core/Fab';
import { Page } from '../Page';
import styles from './CheckoutComplete.module.css';

const CheckoutComplete = () => (
  <Page>
    <Typography variant="h6" color="textPrimary" component="h2">
      Thank you!
    </Typography>
    <div className={styles.navigation}>
      <Link to="/">
        <Fab variant="extended" color="primary" aria-label="Add">
          <KeyboardArrowLeft /> Back to shopping
        </Fab>
      </Link>
    </div>
  </Page>
);

export default CheckoutComplete;
