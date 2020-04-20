import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Side from './components/Side';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Stories from './pages/Stories';
import Profile from './pages/Profile';
import Favrourites from './pages/Favrourites';
import AddStory from './pages/AddStory';
import Story from './pages/Story';

function App() {
  return (
    <div className="container">
      <div className="app">
        <BrowserRouter>
          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path='/stories' exact={true} component={Stories} />
              <Route path='/stories/:storyId' component={Story} />
              <Route path='/profile' component={Profile} />
              <Route path='/favourites' component={Favrourites} />
              <Route path='/add_story' component={AddStory} />
            </Switch>
          </main>
          <Side />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;