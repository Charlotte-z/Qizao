import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import TabBar from '../pages';
import Login from '../pages/login';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={TabBar} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/kk" component={() => <div>awdwad</div>} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Router;
