import React, { Component } from 'react';
import ProgressIndicator from './ProgressIndicator';

let indicatorStyle = {
  // 'width': '100%',
}

class TeamDisplay extends Component {
  render() {
    return (
      <div style={{...this.props.style}}>
        <p>Red Team</p>
        <ProgressIndicator style={indicatorStyle} backgroundColor="#393939" numberSteps={9} currentStep={9} skippedSteps={[]}/>
      </div>
    );
  }
}

export default TeamDisplay