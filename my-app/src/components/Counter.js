import React, { Component } from "react";
import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_INIT_VALUE,
} from "../constants/constants";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.onIncrease = this.onIncrease.bind(this);

    this.onDecrease = this.onDecrease.bind(this);

    this.state = {
      value: COUNTER_INIT_VALUE,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.number !== this.props.number) {
      this.setState({ value: COUNTER_INIT_VALUE });
    }
    if (this.state.value > prevState.value) {
      this.props.onCalculate(COUNTER_INCREMENT);
    } else if (this.state.value < prevState.value) {
      this.props.onCalculate(COUNTER_DECREMENT);
    }
  }

  onIncrease() {
    this.setState((prevState) => {
      return { value: prevState.value + COUNTER_INCREMENT };
    });
  }

  onDecrease() {
    this.setState((prevState) => {
      return { value: prevState.value + COUNTER_DECREMENT };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onIncrease}>+</button>
        <span>{this.state.value}</span>
        <button onClick={this.onDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
