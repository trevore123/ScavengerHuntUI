import React, { Component } from 'react';
import Circle from './Circle';
import Line from './Line';
import * as colors from './colors';

let style = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position:'relative',
};

function getColor(index, currentStep, skippedSteps, backgroundColor) {
  if(index > currentStep) {
    return colors.grey;
  } else if(index === currentStep) {
    return colors.yellow;
  } else if(skippedSteps.includes(index)) {
    return colors.red;
  } else {
    return colors.green;
  }
}

class ProgressIndicator extends Component{
  render() {
    let circles = [];
    for (let i = 0; i < this.props.numberSteps; i++) {
      let color = getColor(i, this.props.currentStep, this.props.skippedSteps, this.props.backgroundColor);
      circles.push(<Circle borderColor={this.props.backgroundColor} color={color}/>);
    }

    return (
      <div style={{...style, ...this.props.style}}>
        {circles}
        <Line color={this.props.backgroundColor}/>
      </div>
    );
  }
};

export default ProgressIndicator;