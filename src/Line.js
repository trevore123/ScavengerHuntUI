import React, { Component } from 'react';

let lineStyle = {
  padding:0,
  position:"absolute",
  backgroundColor: this.props.bgColor,
  width:"100%",
  height:3,
  zIndex:-1
};

class Line extends React.Component{
  render(){
    return (
      <div style={lineStyle} />
    );
  }
};

export default Line;