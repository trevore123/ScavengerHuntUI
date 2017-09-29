import React, { Component } from 'react';
import ProgressIndicator from './ProgressIndicator';
import * as colors from './`colors';

let indicatorStyle = {
  // 'width': '100%',
}

class TeamDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: props.currentStep,
    };
    this.incrementStep = this.incrementStep.bind(this);
  }

  incrementStep(){
    this.setState({
      currentStep: this.state.currentStep + 1
    });
  }

  render() {
    return (
      <div style={{...this.props.style}} onClick={this.incrementStep}>
        <p>Red Team</p>
        <ProgressIndicator 
          style={indicatorStyle} 
          backgroundColor={colors.blackBlue}
          numberSteps={9} 
          currentStep={this.state.currentStep} 
          skippedSteps={[]}
        />
      </div>
    );
  }
}

export default TeamDisplay