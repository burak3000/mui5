import { ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import BasicButtons from './App';
import App from './App';
import { theme } from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BasicButtons>

      </BasicButtons>
    </ThemeProvider>
  </React.StrictMode>
);
