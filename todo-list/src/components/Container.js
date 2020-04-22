import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Container extends Component {
    constructor(props) {
      super(props);
  
      this.onChange = this.onChange.bind(this);
      this.state = {
        todo: [],
      };
      
    }
  

    onChange(event) {
        var todo = [...this.state.todo];
        const input = event.target.value;
        todo.push(input);
        console.log(todo);
    }


    render() {

  
      return (
        <div>
          <form>
            <div>
              <input
                type="text"
                placeholder = "todo items"
              />
              <button onClick ={this.onChange}>ok</button>
            </div>
          </form>
        </div>
      );
    }
  }
  

  export default Container;