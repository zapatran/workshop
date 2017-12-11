import React, { Component } from 'react';
import './App.css';
import Spinner from './components/Spinner/Spinner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Spinner message='Loading' />        
      </div>
    );
  }
}

export default App;
