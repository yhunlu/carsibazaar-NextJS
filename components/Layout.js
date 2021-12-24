import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar, Container, Link, Toolbar, Typography } from '@mui/material';
import useStyles from './../utils/styles';

export default function Layout({ title, description, children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>
          {title ? `${title} - Next CarsıBazaar` : 'Next CarsıBazaar'}
          {description && (
            <meta name="description" content={description}></meta>
          )}
        </title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link underline="hover">
              <Typography className={classes.brand}>CarsiBazaar</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link underline="hover">Cart</Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link underline="hover">Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Next CarsiBazaar</Typography>
      </footer>
    </div>
  );
}
