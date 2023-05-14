import React, { Component } from "react";
import "../styles/counter.css";

class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  Increament() {
    this.setState({
      count: (this.state.count = this.state.count + 1),
    });
  }

  Decreament() {
    this.setState({
      count: (this.state.count = this.state.count - 1),
    });
  }

  render() {
    return (
      <div className="maindiv">
        <div className="div1">
          <p className="counter">{this.state.count} </p>
          <button className="btn1" onClick={() => this.Increament()}>
            Increament
          </button>{" "}
          <button className="btn2" onClick={() => this.Decreament()}>
            Decreament
          </button>
        </div>
      </div>
    );
  }
}

export default Count;
