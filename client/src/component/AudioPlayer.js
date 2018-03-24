import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Promise } from 'es6-promise'
import Utils from './../utils/core'
import FetchData from './../service/data' 
import './AudioPlayer.css'

class AudioPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlayListLoaded: false,
      playlistTitle: '',
      playlist: [],
      currentTrackIndex: 0,
      isPlaying: false,
      progress: '0%',
      time: '00:00',
      artistName: '',
      trackTitle: '',
      trackImage: '',
      src: ''
    }
  }

  componentDidMount() {
    this.audio = ReactDOM.findDOMNode(this.refs.audioElement)
    this.audioSource = ReactDOM.findDOMNode(this.refs.audioElementSource)
    this.fetchPlaylist()
  }

  fetchPlaylist() {
    FetchData('data/playlist.json')
      .then((result) => {
        this.setState({ 
          isPlayListLoaded: true,
          playlist: result.items
        });
        this.setNewTrack()
      });
  }

  updateTime() {
    let progress =(this.audio.currentTime + .25) / this.audio.duration * 100 + '%'
    let timeLeft = this.audio.duration - this.audio.currentTime
    let newTime = Utils.returnFormattedTime(timeLeft)
    this.setState({
      progress: progress,
      time: newTime
    });
  }

  incrementCurrentTrackIndex () {
    this.setState({ 
      currentTrackIndex: ++this.state.currentTrackIndex
    })
  }

  decrementCurrentTrackIndex () {
    this.setState({ 
      currentTrackIndex: --this.state.currentTrackIndex
    })
  }

  playpauseAudio() {
    this.state.isPlaying ? this.pauseAudio() : this.playAudio()
  }

  playAudio() {
    this.audio.play()
    this.setState({
      isPlaying: true
    })
  }

  pauseAudio() {
    this.audio.pause()
    this.setState({
      isPlaying: false
    })
  }

  nextAudio() {
    if (this.state.currentTrackIndex >= (this.state.playlist.length-1) ) return
    this.incrementCurrentTrackIndex()
    this.setNewTrack()
    this.playAudio()
  }

  prevAudio() {
    if (this.state.currentTrackIndex === 0) return
    this.decrementCurrentTrackIndex()
    this.setNewTrack()
    this.playAudio()
  }

  setNewTrack() {
    let trackObj = Utils.returnFromArrayByIndex (this.state.currentTrackIndex, this.state.playlist)
    this.setState({
      artistName: trackObj.artistName,
      trackTitle: trackObj.trackTitle,
      trackImage: trackObj.trackImage,
      src: trackObj.trackSrc
    })
    this.audioSource.src = trackObj.trackSrc // for Safari
    this.audio.load()
  }
 
  render() {
    return (
    <div className="AudioPlayer">
      <audio id="audio" onTimeUpdate={ this.updateTime.bind(this) } ref="audioElement">
        <source id="audioSource" src={ this.state.src } type="audio/mpeg" ref="audioElementSource"/>
        Your browser does not support the audio element.
      </audio>
      <div className="AudioPlayer__cover">
        <a href="#" target="_blank">
          <img src={this.state.trackImage} />
        </a>
      </div>
      <div className="AudioPlayer__info">
        <h2>{ this.state.artistName}</h2>
        <h3>{ this.state.trackTitle}</h3>
        <p className="AudioPlayer__time">{ this.state.time }</p>
        <div className="progressbar_slide">
          <div className="progressbar_range" style={{ width: this.state.progress }}></div>
        </div>
      </div>
      <div className="AudioPlayer__controls">
        <div className="controls_plays">
          <svg id="prev_btn" viewBox="0 0 24.5 23.6" pointerEvents="visible" onClick={ this.prevAudio.bind(this) }>
            <polygon points="0,11.8 13.5,0 13.5,10.7 24.5,0 24.5,23.6 13.5,12.9 13.5,23.6 " pointerEvents="bounding-box" tabIndex="0"></polygon>
          </svg>

          <svg id="plays_btn" viewBox="0 0 24.5 30.9" onClick={ this.playpauseAudio.bind(this) } pointerEvents="bounding-box">
          {
          this.state.isPlaying
            ? <g id="pause_btn" pointerEvents="bounding-box" tabIndex="0">
              <rect x="0" y="0" width="8.2" height="30.9"></rect>
              <rect x="16.2" y="0" width="8.2" height="30.9"></rect>
            </g>
            : <g id="play_btn" pointerEvents="bounding-box" tabIndex="0">
              <path d="M0,30.9L0,0l24.5,15.4L0,30.9z"></path>
            </g>
          }
          </svg>

          <svg id="next_btn" viewBox="0 0 24.5 23.6" pointerEvents="visible" onClick={ this.nextAudio.bind(this) }>
            <polygon points="25,11.8 11.5,0 11.5,10.7 0.5,0 0.5,23.6 11.5,12.9 11.5,23.6 " tabIndex="0"></polygon>
          </svg>
        </div>
      </div>
    </div>
    );
  }
}

export default AudioPlayer;