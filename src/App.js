import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core';
import theme from 'src/styles/theme';
import 'src/app.css';
import CoreLayout from 'src/layouts/CoreLayout';
import Resume from 'src/views/Resume';

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
