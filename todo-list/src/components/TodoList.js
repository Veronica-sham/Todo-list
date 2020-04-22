import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo';

class TodoList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }


    render() {
        const {todoList , onMarkDone} = this.props;
        return (
            <div>
                {todoList.map((todo)=>(
                    <Todo key={todo.id} todo={todo} onMarkDone={onMarkDone} />
                ))}
            </div>
        )
    }
}

export default TodoList;