import React, { Component } from 'react';

var circleStyle = {
  padding:0,
  display:"inline-block",
  backgroundColor: this.props.color,
  borderRadius: "50%",
  width:15,
  height:15,
  borderWidth:3,
  borderStyle: "solid",
  borderColor: this.props.borderColor
};

class Circle extends React.Component{
  render(){
    return (
      <div style={circleStyle} />
    );
  }
};

export default Circle;