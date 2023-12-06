import React, { Fragment } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavigationBar from './navigation/NavBar';
import Home from './components/Home';
import Diet from './components/Diet';

function App() {
  return (
    <Router>
      <Routes>
        <Fragment>
          <NavigationBar />
          <Route path='/' Component={Home} />
          <Route path='/diet' Component={Diet} />
        </Fragment>
      </Routes>
    </Router>
  );
}

export default App;
