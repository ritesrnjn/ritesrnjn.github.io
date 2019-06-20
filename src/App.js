import React from 'react';

import { MuiThemeProvider } from '@material-ui/core';
import { HashRouter as Router } from 'react-router-dom';

import theme from 'styles/theme';
import CoreLayout from 'layouts/CoreLayout';

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <CoreLayout />
      </Router>
    </MuiThemeProvider>
  );
}
