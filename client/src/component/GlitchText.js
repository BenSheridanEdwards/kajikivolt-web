import React, { Component } from 'react';
import './GlitchText.css';

class GlitchText extends Component {
  render() {
    return (
      <div className="GlitchText" style={{ color: this.props.color }}>
        { this.props.text}
      </div>
    );
  }
}

export default GlitchText;