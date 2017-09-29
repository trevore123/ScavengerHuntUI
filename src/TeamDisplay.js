import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressIndicator from './ProgressIndicator';
import * as colors from './colors';

let indicatorStyle = {
  width: '80%'
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
      <div style={{...this.props.style, margin: 30, display:'flex', width:'50%',   justifyContent: 'space-between'}} onClick={this.incrementStep}>
        <p>{this.props.teamName}</p>
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

TeamDisplay.propTypes = {
  teamName: PropTypes.string,
  numberSteps: PropTypes.number,
  currentStep: PropTypes.number,
  skippedSteps: PropTypes.arrayOf(PropTypes.number),
};

export default TeamDisplay