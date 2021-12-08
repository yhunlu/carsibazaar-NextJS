import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Next CarsiBazaar</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>CarsiBazaar</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. Next CarsiBazaar</Typography>
      </footer>
    </div>
  );
}
