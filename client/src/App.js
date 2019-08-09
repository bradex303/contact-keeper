import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home.js';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/layout/Navbar';
import ContactState from './context/contact/ContactState';

const App = () => {
  return (
    <ContactState>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ContactState>
  );
};

export default App;
