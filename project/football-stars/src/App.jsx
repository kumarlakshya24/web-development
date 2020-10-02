import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MyCaptain from './components/MyCaptain/MyCaptain';
import MyTeam from './components/MyTeam/MyTeam';
import Logout from './components/Logout/Logout';
import PlayerLeaderboards from './components/PlayerLeaderboards/PlayerLeaderboards';

function App() {
  return (
    <Router>
      <Switch>        
        <Route path="/player-leaders-boards" exact component={PlayerLeaderboards} />
        <Route path="/home" exact component={Home} />
        <Route path="/" exact component={Login} />
        <Route path="/my-captain" exact component={MyCaptain} />
        <Route path="/my-team" exact component={MyTeam} />
        <Route path="/logout" exact component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;