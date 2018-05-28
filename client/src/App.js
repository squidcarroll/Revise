import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './styles/App.css';

import Landing from './components/landing';
import Navbar from './components/navbar';
import Login from './components/login';
import Signup from './components/signup';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route path="/" component={Navbar} />
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </div>
    );
  }
}

export default App;