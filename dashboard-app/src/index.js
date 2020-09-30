import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import ExplorePage from './pages/ExplorePage';
import DashboardPage from './pages/DashboardPage';
import App from './App';

const staticDashboards = [
  "dashboard1",
  "dashboard2",
  "dashboard3",
  "dashboard4"
];

ReactDOM.render(
  <Router>
    <App>
      <Route key="index1" exact path="/" render={ () => <DashboardPage dashboard={staticDashboards[0]}/> } />
      <Route key="index" exact path="/Dashboard2" render={ () => <DashboardPage dashboard={staticDashboards[1]}/> } />
      <Route key="index2" exact path="/Dashboard3" render={ () => <DashboardPage dashboard={staticDashboards[2]}/> } />
      <Route key="index3" exact path="/Dashboard4" render={ () => <DashboardPage dashboard={staticDashboards[3]}/> } />
      <Route key="explore" path="/explore" component={ExplorePage} />
    </App>
    </Router>
, // eslint-disable-next-line no-undef
  document.getElementById('root')
);
