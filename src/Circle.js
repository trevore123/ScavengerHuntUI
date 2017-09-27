import React, { Component } from 'react';

class Circle extends React.Component{
  render(){
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
    return (
      <div style={circleStyle}>
      </div>
    );
  }
};

export default Circle;