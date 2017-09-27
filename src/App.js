import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressIndicator from './ProgressIndicator'

class App extends Component {
  render() {  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ProgressIndicator backgroundColor="#393939" numberSteps={9} currentStep={0} skippedSteps={[2]}/>
      </div>
    );
  }
}

export default App;
