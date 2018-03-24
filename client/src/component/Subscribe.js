import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

class Subscribe extends Component {

  constructor(props){
    super(props);
    this.defaultState = {
      emailValue: '',
      fNameValue: '',
      lNameValue: '',
      isFetching: false,
      isComplete: false,
      isError: false,
      isSuccess: false,
      message: `Thanks for your interest in joining our email list. 
                To complete the subscription process, please click the link in the email we just sent you.`
    }
    this.state = this.defaultState;
  }

  updateInputValue(event){
    debugger;
    this.setState({
      emailValue: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let data = {
      email : this.state.emailValue
    }
    this.callApi(data)
      .then(response => {
         this.setState({
            isFetching: false,
            isComplete: true,
            isSuccess: true,
            message: this.state.message
          });
      })
      .catch(error => {
        this.setState({
          isFetching: false,
          isComplete: true,
          isError: true,
          message: error.message
        });
      })
    }

  callApi = async (data) => {
    this.setState({
      isFetching: true
    });
    const response = await fetch('/api/subscribe',
      {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
      });
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    if (body.error) throw Error(body.error);

    return body;
  };

  resetState = () => {
    this.setState(this.defaultState)
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col md="4"></Col>
          <Col md="4">
           {this.state.isSuccess && (
            <div><h4>Thanks</h4>
                <p>{this.state.message}</p>
              </div>
            )}
           {this.state.isError && (
            <div>
                <h4>Oops</h4>
                <p>{this.state.message}</p>
                <Button variant="raised" onClick={this.resetState.bind(this)}>Try again</Button>
            </div>
            )}
            {!this.state.isComplete && (
              <Form onSubmit={this.handleSubmit.bind(this)}>
              <legend>Subscribe to the mailing list</legend>
              <Input onChange={this.updateInputValue.bind(this)} ref={(ref) => {this.email = ref}} label="Your email address" type="email" name="email" floatingLabel={true} required={true} />
              <Button variant="raised">Subscribe</Button>
              <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true' aria-label="Please leave the following three fields empty">
                  <label htmlFor="b_name">Name: </label>
                  <input type="text" name="b_name" tabIndex="-1" value="" placeholder="Freddie" id="b_name"/>

                  <label htmlFor="b_email">Email: </label>
                  <input type="email" name="b_email" tabIndex="-1" value="" placeholder="youremail@gmail.com" id="b_email"/>

                  <label htmlFor="b_comment">Comment: </label>
                  <textarea name="b_comment" tabIndex="-1" placeholder="Please comment" id="b_comment"></textarea>
              </div>
            </Form> )}
          </Col>
          <Col md="4"></Col>
        </Row>
      </Container>

    )
  }
}

export default Subscribe
