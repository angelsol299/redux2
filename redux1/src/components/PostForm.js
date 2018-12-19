import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title: </label>
            <br />
            <input type="text" />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <input type="text" name="title" value={this.state.title} />
          </div>
          <br />
          <button type="submit" value={this.state.body}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostForm;
