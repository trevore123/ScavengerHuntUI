import React, { Component } from 'react';
import Circle from './Circle';
import Line from './Line';

class ProgressIndicator extends React.Component{

  constructor(props) {
      super(props);
      this.state = {currentStep:this.props.currentStep};
      this.incrementStep = this.incrementStep.bind(this);
  }

  getColor(index, skippedSteps, currentStep){
    if(index > currentStep) {
      return this.props.backgroundColor;
    } else if(index === currentStep) {
      return "#FFFF00";
    } else if(skippedSteps.includes(index)) {
      return "#FF0000";
    } else {
      return "#00FF00";
    }
  }

  incrementStep(){
    this.setState({
      currentStep:this.state.currentStep+1
    });
  }

  render(){
    let circles = [];
    for (var i=0; i < this.props.numberSteps; i++) {
      var color = this.getColor(i, this.props.skippedSteps, this.state.currentStep);
      circles.push(<Circle borderColor={this.props.backgroundColor} color={color}/>);
    }
    var Style = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position:"relative"
    };
    return (
      <div style={{...Style,...this.props.style}} onClick={this.incrementStep}>
      {circles}
      <Line bgColor={this.props.backgroundColor}/>
      </div>
    );
  }
};

export default ProgressIndicator;