import React, { Component } from 'react';


class Line extends React.Component{
  render(){
    var lineStyle = {
      padding:0,
      position:"absolute",
      backgroundColor: this.props.bgColor,
      width:"100%",
      height:3,
      zIndex:-1
    };
    return (
      <div style={lineStyle}>
      </div>
    );
  }
};

export default Line;