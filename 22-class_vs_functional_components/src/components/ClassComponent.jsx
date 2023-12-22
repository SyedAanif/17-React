import React from "react";

// more keywords
// earlier was used for managing state
class ClassComponent extends React.Component {
  constructor() {
    super();
    // initial state value
    this.state = { count: 0 };
    // use of "this" and "bind"
    this.increase = this.increase.bind(this);
  }

  //   handler or LIFECYCLE
  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  //   render the component
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>+</button>
      </div>
    );
  }
}

export default ClassComponent;
