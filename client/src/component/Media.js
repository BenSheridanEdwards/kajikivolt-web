import React, { Component } from 'react'
import { Media, Player, controls } from 'react-media-player'
const { PlayPause, MuteUnmute, } = controls

class MediaPlayer extends Component {
  render() {
    return (
      <Media>
        <div className="media">
          <div className="media-player">
            <Player src="//www.youtube.com/embed/-f0fcgLC1nA?rel=0"/>
          </div>
          <div className="media-controls">
            <PlayPause/>
            <MuteUnmute/>
          </div>
        </div>
      </Media>
    )
  }
}

export default MediaPlayer;