import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoList from "../components/TodoList";
import { INIT_TODOS } from "../constants/constants";
import TodoApi from "../apis/TodoApi";

class Container extends Component {
  constructor(props) {
    super(props);

    this.onMarkDone = this.onMarkDone.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.state = {
      todoList: INIT_TODOS,
      itemNumber: INIT_TODOS.length,
    };
  }

  componentDidMount() {
    TodoApi.getTodoList().then((response)=>{
      const newtodoList = response.data;
      this.setState({todoList: newtodoList});
      console.log(response);
    })
  } 

  onMarkDone(todo) {
    const indexOfItem = this.state.todoList.indexOf(todo);
    console.log("Container: " + todo);
    console.log("Container: " + indexOfItem);
    console.log(this.state.todoList.filter((i) => i.id == todo.id));

    this.setState({
      todoList: this.state.todoList,
    });
    console.log(this.state.todoList);
  }

  onDelete(todo) {
    const indexOfItem = this.state.todoList.indexOf(todo);
    this.state.todoList.splice(indexOfItem, 1);
    console.log(this.state.todoList);
    this.setState({
      todoList: this.state.todoList,
    });
  }

  addTodo(addedItem) {
    console.log("AddTODO");
    console.log(addedItem);
    const newId = (this.state.todoList.length + 2).toString();
    const newContent = addedItem;
    const newStatus = true;
    var itemToBeAdded = { id: newId, content: newContent, status: newStatus };
    this.state.todoList.push(itemToBeAdded);
    console.log(this.state.todoList);
    this.setState({
      todoList: this.state.todoList,
    });
  }

  render() {
    return (
      <div>
        My TodoList
        <TodoList
          todoList={this.state.todoList}
          onMarkDone={this.onMarkDone}
          onDelete={this.onDelete}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default Container;
