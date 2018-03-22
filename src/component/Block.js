import React, { Component } from 'react';
import './Block.css';

class Block extends Component {
  render() {
    return (
      <div className={ 'Block ' + this.props.className }>
        { this.props.children }
      </div>
    );
  }
}

export default Block;