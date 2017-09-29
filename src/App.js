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
    let teams = []
    for (let i = 0; i < 20; i++) {
      teams.push(<TeamDisplay
        style={{width: '35%'}}
        teamName="T-Raw"
        numberSteps={9} 
        currentStep={0} 
        skippedSteps={[]}
      />);
    }
    return (
      <div className="App" style={{}}>
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>*/}
        <img src={logo} className="App-logo" alt="logo" />
        {teams}
      </div>
    );
  }
}

export default App;
