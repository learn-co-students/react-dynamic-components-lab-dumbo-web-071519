import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    if (this.props.opacity >= .2) {
      const opacity = this.props.opacity - .1
      console.log(opacity)
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={opacity}/>
        </div>
      )
    }
    else {
      return null
    }
  }

}
