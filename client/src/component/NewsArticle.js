import React, { Component } from 'react';
import Button from 'muicss/lib/react/button';
import Img from 'react-image'
import VisibilitySensor from 'react-visibility-sensor'
import './NewsArticle.css';

class NewsArticle extends Component {

  render() {
  let handleClick = function(e) {
    e.preventDefault();
    window.location = this.props.item.link;
  }
    return (
      <div key={this.props.key} className="NewsArticle">
        <h3 className="NewsArticle__Title">{this.props.item.title}</h3>
        <p className="NewsArticle__Text">{this.props.item.description}</p>
        <VisibilitySensor>
          <Img className="NewsArticle__Image" src={this.props.item.image} />
        </VisibilitySensor>
        <div className="mui--clearfix">
          {this.props.item.buttonText ? <Button onClick={handleClick.bind(this)} size="large" color="primary">{this.props.item.buttonText}</Button> : null} 
        </div>
      </div>
    );
  }
}

export default NewsArticle;

/*
<div id="container">

<h2>Newly announced shows in Russia, June 2018.</h2><span class="date">February 28, 2018</span>

<p>ON SALE NOW! Two shows this June in Russia, we cannot wait!</p>
<p>Tickets:
June 4th St.Petersberg Kosmonavt <a href="https://redkassa.ru/events/bilety_na_concert_the_kills_spb" rel="noopener" target="_blank">here</a>.</p>
<p>June 6th Moscow Glav Club <a href="https://redkassa.ru/events/bilety_na_concert_the_kills_glavgreen_club" rel="noopener" target="_blank">here</a>.</p>
<p><img src="http://thekills.tv/wp2016/wp-content/uploads/2018/02/RUSSIA.jpg" alt="RUSSIA" width="662" height="662" class="alignnone size-full wp-image-2700" 
srcset="http://thekills.tv/wp2016/wp-content/uploads/2018/02/RUSSIA-150x150.jpg 150w,
 http://thekills.tv/wp2016/wp-content/uploads/2018/02/RUSSIA-300x300.jpg 300w,
  http://thekills.tv/wp2016/wp-content/uploads/2018/02/RUSSIA.jpg 662w" 
  sizes="(max-width: 662px) 100vw, 662px"></p>


  </div>
  */