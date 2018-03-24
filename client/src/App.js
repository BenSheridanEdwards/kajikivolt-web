import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Block from './component/Block';
import News from './component/News';
import Hero from './component/Hero';
import Footer from './component/Footer';
import Music from './component/Music';
import Media from './component/Media';
import Gallery from './component/Gallery';
import Subscribe from './component/Subscribe';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Block className="Block__Background__A">
          <News />
        </Block>
        <Music />
        <Block className="Block__Background__C">
          <Gallery />
        </Block>
        <Subscribe/>
        <Footer />
      </div>
    );
  }
}

export default App;
