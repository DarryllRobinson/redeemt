import React from 'react';
import { Container, Grid, Paper, Skeleton } from '@mui/material';

function Home() {
  return (
    <>
      Redeemt
      <Grid container item xs={12} md={4} lg={3} spacing={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Skeleton variant="rectangular" width={210} height={118} />
        </Paper>
      </Grid>
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Skeleton variant="circular" width={310} height={118} />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper
          sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240 }}
        >
          <Skeleton variant="rectangular" width={290} height={118} />
        </Paper>
      </Grid>
    </>
  );
}

export default Home;
