import React, { Component } from 'react';
import './App.css';
import Spinner from './components/Spinner/Spinner';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header title="github search" />
        <Spinner message='Loading' />        
      </div>
    );
  }
}

export default App;
