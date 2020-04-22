import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Todo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isStrikeThrough:true,
        }

        this.onClickDone = this.onClickDone.bind(this);
        this.onMarkDone = this.onMarkDone.bind(this);
    }
    
    onClickDone() {
        console.log("IN Todo.");
        this.onMarkDone();
    }

    onMarkDone() {
        const todo = this.props.todo;
        console.log(todo);
        this.props.todo.status=!this.props.todo.status;
        console.log(todo);
        this.props.onMarkDone(todo);
        this.setState((prevState) => {
            return {
              isStrikeThrough: !prevState.isStrikeThrough,
            };
          });

    }

    render() {
        const todo = this.props.todo;
        return (
            <div onClick={this.onClickDone}><li style={{
                textDecoration: this.state.isStrikeThrough ? 'line-through' : 'none',
              }}>
                {todo.content}
                </li>
            </div>
        )
    }
}

export default Todo;