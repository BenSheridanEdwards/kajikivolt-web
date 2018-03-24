import React, { Component } from 'react';

class Container extends Component {
  render() {
    return (
      <div className='mui-container' style="overflow:hidden">
        { this.props.children }
      </div>
    );
  }
}

export default Container;