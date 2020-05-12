import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessageInput = (event) => {
      this.setState({
        message: event.target.value
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      message : this.state.message
    })
    console.log(this.state.message)
  }

  render() {
    return (
      <div onClick={event => this.handleSubmit(event)}>
        Remaining Characters {(this.props.maxChars - this.state.message.length)}
        <br></br>
        <strong>Your message:</strong>
        <input  type="text" name="message" id="message" onChange={event => this.handleMessageInput(event)} value={this.state.message}/>
        <button value="submit">Submit</button>
      </div>
    );
  }
}

export default TwitterMessage;
