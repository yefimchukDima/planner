import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { router } from './router/router';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CssBaseline />

      <RouterProvider router={router} />
    </LocalizationProvider>
  );
}

export default App;
