import React from 'react';
import './App.scss';
import Articles from '../Articles';
import Signup from '../Users/signup';

const App = () => (
  <div className="App">
    <Signup />
    <Articles />
  </div>
);

export default App;
