import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 5 };
    this.handelDecrement = this.handelDecrement.bind(this);
    this.handelIncerement = this.handelIncerement.bind(this);
  }

  handelDecrement() {
    this.setState((cur) => {
      return { count: cur.count - 1 };
    });
  }

  handelIncerement() {
    this.setState((cur) => {
      return {
        count: cur.count + 1,
      };
    });
  }
  render() {
    const date = new Date("June 07 2024");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handelDecrement}>-</button>
        <span>
          {" "}
          {date.toDateString()} [{this.state.count}]
        </span>
        <button onClick={this.handelIncerement}>+</button>
      </div>
    );
  }
}

export default Counter;
