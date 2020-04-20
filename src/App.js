import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Side from './components/Side';

function App() {
  return (
    <div className="container">
      <div className="app">
        <main>
          <BrowserRouter>
            <Route path='/' exact component={Home} />
          </BrowserRouter>
        </main>
        <Side />
      </div>
    </div>
  );
}

export default App;