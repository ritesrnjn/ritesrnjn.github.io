import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core';
import { HashRouter as Router } from 'react-router-dom';

import theme from 'styles/theme';
import CoreLayout from 'layouts/CoreLayout';
import Resume from './pages/Resume';

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path={'/resume'} component={Resume} />
          <Route path={'/'} component={CoreLayout} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}
