import React, { Component } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      input: "",
    };
  }

  addTodo(event) {
    console.log("hi");
    console.log(this.state.input);
    this.props.addTodo(this.state.input);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value.trim(),
    });
  }

  render() {
    const { todoList, onMarkDone, onDelete } = this.props;
    return (
      <div>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onMarkDone={onMarkDone}
            onDelete={onDelete}
          />
        ))}
        <input type="text" name="input" onChange={this.handleChange}></input>
        <button onClick={this.addTodo}>ok</button>
      </div>
    );
  }
}

export default TodoList;
