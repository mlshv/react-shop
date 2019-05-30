import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Fab from '@material-ui/core/Fab';
import styles from './Header.module.css';

const Header = ({ productsCount }) => (
  <AppBar position="relative">
    <Toolbar className={styles.toolbar}>
      <Typography variant="h6" color="inherit" component="h1" noWrap>
        React shop
      </Typography>
      {productsCount ? (
        <Link to="/cart">
          <Fab variant="extended" color="secondary" aria-label="Add">
            <ShoppingCartIcon /> {productsCount}
          </Fab>
        </Link>
      ) : null}
    </Toolbar>
  </AppBar>
);

export default Header;
