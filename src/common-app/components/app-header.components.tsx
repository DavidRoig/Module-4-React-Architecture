import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

export const AppHeader: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Lemon code React
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
