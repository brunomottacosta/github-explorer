import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Respository from '../pages/Respository';

const Routes: React.FC = () => (
  <Switch>
    <Redirect exact from="/" to="/dashboard" />

    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/repositories/:repository+" exact component={Respository} />
  </Switch>
);

export default Routes;
