import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import Loading from './Loading';
import Button from 'muicss/lib/react/button';
import Heading from './Heading';
import NewsArticle from './NewsArticle';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("data/news.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    let handleClick = function(event) {
      event.preventDefault();
      window.location.replace(window.location.pathname + window.location.search + window.location.hash);
    }
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <Container>
              <p>Oops! Something has gone wrong: {error.message}</p>
              <Button onClick={handleClick.bind(this)} size="large" color="primary">Try again</Button>
            </Container>;
    } else if (!isLoaded) {
      return <Container><Loading/></Container>;
    } else {
      return (
          <Container>
            <Heading
            rank={2}
            text="NEWS"
            type="headline"
            />
            {items.map((item, index)  => (   
              <NewsArticle key={index} item={item} />
            ))}
          </Container>
      );
    }
  }
}

export default News;