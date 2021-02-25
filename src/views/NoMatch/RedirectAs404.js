import React from 'react';
import { Redirect } from 'react-router-dom';
import assign from 'lodash/assign';

const RedirectAs404 = ({ location }) => (
  <Redirect to={assign({}, location, { state: { is404: true } })} />
);

export default RedirectAs404;
