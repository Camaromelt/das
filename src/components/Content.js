import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.jsx';
import Stories from './Stories.jsx';
import Users from './Users.jsx';
import Submissions from './Submissions.jsx';
import NotFound from './NotFound.jsx';

const Content = (props) => {
  return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/stories" component={Stories} />
        <Route path="/users" component={Users} />
        <Route path="/submissions" component={Submissions} />
        <Route component={NotFound} />
      </Switch>
);
}

export default Content;
