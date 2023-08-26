import React from 'react';

import { Grid } from '@mui/material';

const Planet = (id: string) => {
  return (
    <div className="planet">
      <Grid container spacing={2}>
        <Grid item>Name</Grid>
        <Grid item>Like Sky Walker</Grid>
      </Grid>
    </div>
  );
};

export default Planet;
