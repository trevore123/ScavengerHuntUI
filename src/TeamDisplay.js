import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressIndicator from './ProgressIndicator';
import * as colors from './colors';

let indicatorStyle = {
  width: '80%'
}

var textStyle = {
  margin: 10,
  fontSize: '1.5em',
  fontFamily: 'Papyrus, fantasy',
  fontWeight: 'bold'
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
      <div style={{...this.props.style, background: 'rgba(237,212,149,0.6)', borderRadius:10, marginBottom: 10, display:'flex', justifyContent:'space-between', paddingLeft:10, paddingRight:10}} onClick={this.incrementStep}>
        <p style={textStyle}>{this.props.teamName}</p>
        <ProgressIndicator
          disabled={this.props.disabled}
          style={indicatorStyle}
          backgroundColor={colors.brown}
          numberSteps={this.props.numberSteps}
          currentStep={this.props.currentStep}
          skippedSteps={this.props.skippedSteps}
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