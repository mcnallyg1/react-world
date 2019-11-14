import React, { Component } from 'react';
import TButton from './components/TButton';
import TDropDown from './components/TDropDown';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TButton></TButton>
          <TDropDown></TDropDown>
        </header>
      </div>
    );
  }
}

export default App;
