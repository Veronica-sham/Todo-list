import React, { Component } from "react";
import Counter from "./Counter";
import {
  COUNTER_GROUP_INIT_COUNT,
  COUNTER_GROUP_INIT_SUM,
} from "../constants/constants";
import propTypes from "prop-types";

class CounterGroup extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onCalculate = this.onCalculate.bind(this);
    this.state = {
      number: COUNTER_GROUP_INIT_COUNT,
      sum: COUNTER_GROUP_INIT_SUM,
    };
  }

  initArray(number) {
    let size = this.props.size;
    if (number.length > 0) {
      size = parseInt(number);
    }
    return Array.from(Array(size).keys());
  }

  onChange(event) {
    this.setState({
      number: event.target.value,
      sum: COUNTER_GROUP_INIT_SUM,
    });
  }

  onCalculate(variation) {
    this.setState((prevState) => {
      return {
        sum: prevState.sum + variation,
      };
    });
  }

  render() {
    const size = this.props.size;
    let counters = this.initArray(this.state.number);
    return (
      <div>
        <form>
          <div>
            Generate{" "}
            <input
              onChange={this.onChange}
              type="text"
              value={this.state.number}
            />{" "}
            Counters <br />
            sum of all counters value is <mark>{this.state.sum}</mark> <br />
          </div>
        </form>
        {counters.map((value) => (
          <Counter
            key={value}
            number={this.state.number}
            onCalculate={this.onCalculate}
          />
        ))}
      </div>
    );
  }
}

CounterGroup.propTypes = {
  size: propTypes.number,
};

CounterGroup.defaultProps = {
  size: COUNTER_GROUP_INIT_COUNT,
};

export default CounterGroup;
