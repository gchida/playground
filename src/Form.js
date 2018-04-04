import React, { Component } from "react";
import "./css/form.css";

export default class Form extends Component {
  render() {
    return (
      <div className="form">
        <form name="todoform" onSubmit={this.props.onSubmit}>
          <input name="title" type="text" placeholder="Reactの勉強" />
          <br />
          <textarea name="desc" placeholder="説明を入力" />
          <br />
          <button type="submit">Create To Do !</button>
        </form>
      </div>
    );
  }
}
