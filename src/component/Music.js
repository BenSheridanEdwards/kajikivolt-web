import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import AudioPlayer from './AudioPlayer';
import Heading from './Heading';

class Music extends Component {

  componentDidMount() {

  }

  render() {
      return (
          <Container>
          <Heading
          rank={2}
          text="MUSIC"
          type="headline"
          />
          <AudioPlayer />
          </Container>
      );
  }
}

export default Music;