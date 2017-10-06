import React, { Component } from 'react';
import * as colors from './colors';


var circleStyle = {
  display:'flex',
  padding: 0,
  backgroundColor: '#000',
  borderRadius: '50%',
  width: 18,
  height: 18,
  borderWidth: 3,
  borderStyle: 'solid',
  borderColor: '#000',
  zIndex: 1,
  alignItems:'center',
  justifyContent:'center'
};

var innerCircleStyle = {
  borderRadius: '50%',
  width: 10,
  height: 10,
  backgroundColor: '#000000',
  zIndex: 1,
  // borderStyle: 'solid',
  // borderWidth: 1,
  // borderColor: colors.blackBlue
}

class Circle extends Component {
  render() {
    let customColors = {
      backgroundColor: '#ffffff',
      borderColor: this.props.borderColor
    }

    return (
      <div style={{...circleStyle, ...customColors, ...this.props.style}}>
        <div style={{...innerCircleStyle, backgroundColor:this.props.color, ...this.props.style}}></div>
        </div>
    );
  }
};

export default Circle;