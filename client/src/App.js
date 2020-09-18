import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Home from './pages/Home'
import Saved from './pages/Saved'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Saved">Saved</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Saved" component={Saved} />
        </Switch>
      </div>
    </Router>

  )
}

export default App;
