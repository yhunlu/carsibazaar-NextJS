import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import useStyles from './../utils/styles';

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Next CarsiBazaar</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>CarsiBazaar</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Next CarsiBazaar</Typography>
      </footer>
    </div>
  );
}
