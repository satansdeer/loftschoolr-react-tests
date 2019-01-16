import React, { Component } from "react";
import ExampleComponent from "./ExampleComponent";
import "./App.css";

class App extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p className="count">{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <ExampleComponent />
      </div>
    );
  }
}

export default App;
