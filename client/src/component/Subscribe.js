import React, { Component } from 'react';
import Rimp from 'rimp'

class Subscribe extends Component {
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/subscribe');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };
  render() {
    return (
      <Rimp
        buttonValue={`submit`}
        buttonStyles={`btn`}
        containerStyles={`newsletter__form`}
        completeMessage={`Thanks, we'll send you an email to confirm!`}
        mailChimpUrl="//kajikivolt.us12.list-manage.com/subscribe/post-json?u=user&amp;id=list&c=?"
       />
    )
  }
}

export default Subscribe;
