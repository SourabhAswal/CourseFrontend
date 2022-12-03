import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import TestApiDemo from './pages/Mycomponent'
import Postdata from './pages/Mypostcomponent';
import Deleteapi from './pages/Mydeletecomponent';
import UpdateApi from './pages/Myputcomponent';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/show' component={TestApiDemo} />
          <Route path='/add' component={Postdata} />
          <Route path='/remove' component={Deleteapi} />
          <Route path='/update' component={UpdateApi} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
