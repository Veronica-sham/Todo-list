import React, { Component } from "react";
import PropTypes from "prop-types";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isStrikeThrough: false,
    };

    this.onClickDone = this.onClickDone.bind(this);
    this.onMarkDone = this.onMarkDone.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onClickDone() {
    console.log("IN Todo.");
    this.onMarkDone();
  }

  onMarkDone() {
    const todo = this.props.todo;
    console.log(todo);
    this.props.todo.status = !this.props.todo.status;
    console.log(todo);
    this.props.onMarkDone(todo);
    this.setState((prevState) => {
      return {
        isStrikeThrough: !prevState.isStrikeThrough,
      };
    });
  }

  onDelete() {
    const todo = this.props.todo;
    console.log("byreeeeee");
    this.props.onDelete(todo);
  }

  render() {
    const todo = this.props.todo;
    return (
      <div>
        <div onClick={this.onClickDone}>
          <span
            style={{
              textDecoration: this.state.isStrikeThrough
                ? "line-through"
                : "none",
            }}
          >
            {todo.content}
          </span>
          <button onClick={this.onDelete}> x </button>
        </div>
      </div>
    );
  }
}

export default Todo;
