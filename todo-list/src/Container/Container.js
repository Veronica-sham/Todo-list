import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';
import {INIT_TODOS} from '../constants/constants';

class Container extends Component {
    constructor(props) {
      super(props);

      this.onMarkDone = this.onMarkDone.bind(this);
      this.onDelete = this.onDelete.bind(this);
      this.state = {
        todoList: INIT_TODOS,
      };
      
    }
  
    onMarkDone(todo){        
      const indexOfItem = this.state.todoList.indexOf(todo);
      console.log("Container: "+ todo);
      console.log("Container: "+ indexOfItem);
      console.log(this.state.todoList.filter(i=>i.id ==todo.id));

      this.setState((prevState) => {
        return {
          todoList: this.state.todoList
        };
      });

      console.log("IN Container.");
      console.log(this.state.todoList); 
    }


    onDelete(todo){
      const indexOfItem = this.state.todoList.indexOf(todo);
      this.state.todoList.splice(indexOfItem,1);
      console.log(this.state.todoList);
      this.setState((prevState) => {
        return {
          todoList: this.state.todoList
        };
      });

    }


    render() {

  
      return (
        <div>
            TodoContainer
            <TodoList todoList={INIT_TODOS} onMarkDone={this.onMarkDone} onDelete={this.onDelete}/>
        </div>
      );
    }
  }
 

  export default Container;