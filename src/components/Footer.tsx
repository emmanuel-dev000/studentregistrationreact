import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';

export default function Footer() {
  return (
    <Toolbar>
      <Typography variant="subtitle2" color="primary">
          Made by Emmanuel Pangan &copy; { new Date().getFullYear() }
        </Typography>
    </Toolbar>
  );
}