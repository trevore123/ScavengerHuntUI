import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamDisplay from './TeamDisplay'

import openSocket from 'socket.io-client';
let socket = openSocket('http://localhost:12345');

socket.on('status-update', function(data) {
  console.log('event recieved.')
  console.log(data)
});

class App extends Component {
  render() {  
    return (
      <div className="App">
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>*/}
        <img src={logo} className="App-logo" alt="logo" />
        <TeamDisplay 
          style={{'width': '35%'}} 
          backgroundColor="#114144" 
          numberSteps={9} 
          currentStep={0} 
          skippedSteps={[]}
        />
      </div>
    );
  }
}

export default App;
