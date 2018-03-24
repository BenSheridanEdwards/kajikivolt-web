import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import AudioPlayer from './AudioPlayer';
import GlitchText from './GlitchText';

class Music extends Component {

  render() {
      return (
          <Container>
            <GlitchText text="MUSIC" color="black" />
            <AudioPlayer />
          </Container>
      );
  }
}

export default Music;