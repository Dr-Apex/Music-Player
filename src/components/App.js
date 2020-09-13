import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import MusicPlayer from './MusicPlayer';
import PlayList from './PlayList';
import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route path="/" exact component={MusicPlayer} />
            <Route path="/music/playlist" exact component={PlayList} />
          </Switch>
          <div className="MusicCredit">React Music Player</div>
        </div>
      </Router>
    </div>
  );
};

export default App;
