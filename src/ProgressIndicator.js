import React, { Component } from 'react';
import Circle from './Circle';
import Line from './Line';

let style = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position:'relative',
};

function getColor(index, currentStep, skippedSteps, backgroundColor) {
  if(index > currentStep) {
    return backgroundColor;
  } else if(index === currentStep) {
    return '#FFFF00';
  } else if(skippedSteps.includes(index)) {
    return '#FF0000';
  } else {
    return '#00FF00';
  }
}

class ProgressIndicator extends React.Component{
  constructor(props) {
      super(props);
      this.state = {currentStep:this.props.currentStep};
      this.incrementStep = this.incrementStep.bind(this);
  }

  incrementStep(){
    this.setState({
      currentStep:this.state.currentStep+1
    });
  }

  render() {
    let circles = [];
    for (let i = 0; i < this.props.numberSteps; i++) {
      let color = getColor(i, this.state.currentStep, this.props.skippedSteps, this.props.backgroundColor);
      circles.push(<Circle borderColor={this.props.backgroundColor} color={color}/>);
    }

    return (
      <div style={{...style, ...this.props.style}} onClick={this.incrementStep}>
        {circles}
        <Line color={this.props.backgroundColor}/>
      </div>
    );
  }
};

export default ProgressIndicator;