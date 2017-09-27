import React, { Component } from 'react';

let lineStyle = {
  padding: 0,
  position: 'absolute',
  backgroundColor: '#000',
  width: '100%',
  height: 3,
  zIndex: -1,
};

class Line extends React.Component{
  render() {
    let customColors = {
      backgroundColor: this.props.color,
    }

    return (
      <div style={{...lineStyle, ...customColors}} />
    );
  }
};

export default Line;