import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import About from './components/about/about.js';
import Navpills from './components/navpills.js';
import Discover from './components/discover/discover.js';
import Search from './components/search/search.js';


const App = () =>

  <Router>
    <div>
    <Navpills />
    <Route exact path="/" component={About} />
    <Route exact path="/discover" component={Discover} />
    <Route exact path="/search" component={Search} />
    </div>
  </Router>

export default App;
