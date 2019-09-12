import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import Signup from '../Users/signup';
import Articles from '../Articles';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Route path="/" exact component={Signup} />
      <Route path="/articles/" component={Articles} />
    </BrowserRouter>
  </div>
);

export default App;
