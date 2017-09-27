import React, { Component } from 'react';
import Circle from './Circle';
import Line from './Line';

let style = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position:'relative',
};

function getColor(index, currentStep, skippedSteps) {
  if(index > currentStep) {
    return this.props.backgroundColor;
  } else if(index === currentStep) {
    return '#FFFF00';
  } else if(skippedSteps.includes(index)) {
    return '#FF0000';
  } else {
    return '#00FF00';
  }
}

class ProgressIndicator extends React.Component{
  render() {
    let circles = [];
    for (let i = 0; i < this.props.numberSteps; i++) {
      let color = getColor(i, this.props.currentStep, this.props.skippedSteps);
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