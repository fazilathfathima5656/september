import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import ExplorePage from './pages/ExplorePage';
import DashboardPage from './pages/DashboardPage';
import App from './App';

ReactDOM.render(
  <Router>
    <App>
      <Route key="index" exact path="/" component={DashboardPage}  />
      <Route key="index" exact path="/Dashboard1" component={DashboardPage} />
      <Route key="index" exact path="/Dashboard2" component={DashboardPage}  />
      <Route key="index" exact path="/Dashboard3" component={DashboardPage}  />
      <Route key="explore" path="/explore" component={ExplorePage} />
     
    </App>
    </Router>
, // eslint-disable-next-line no-undef
  document.getElementById('root')
);
