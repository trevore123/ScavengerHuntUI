import React, { Component } from 'react';

var circleStyle = {
  padding: 0,
  display: 'inline-block',
  backgroundColor: '#000',
  borderRadius: '50%',
  width: 15,
  height: 15,
  borderWidth: 3,
  borderStyle: 'solid',
  borderColor: '#000',
};

class Circle extends React.Component{
  render() {
    let customColors = {
      backgroundColor: this.props.color,
      borderColor: this.props.borderColor,
    }

    return (
      <div style={{...circleStyle, ...customColors}} />
    );
  }
};

export default Circle;