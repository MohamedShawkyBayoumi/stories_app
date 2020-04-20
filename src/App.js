import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Side from './components/Side';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Stories from './pages/Stories';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="container">
      <div className="app">
        <BrowserRouter>
          <main>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/stories' component={Stories} />
            <Route path='/profile' component={Profile} />
          </main>
          <Side />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;