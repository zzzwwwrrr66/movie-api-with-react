import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/views/Home';
import Movies from './components/views/Movies/index'
import detailPage from './components/views/Movies/detailPage'

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/detail/:id" component={detailPage} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
