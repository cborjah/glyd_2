import React, { Component } from "react";
import "./App.css";

import Checkbox from "@material-ui/core/Checkbox";

class App extends Component {
  state = { isChecked: false };

  handleOnChange = () =>
    this.setState(prevState => ({ isChecked: !prevState.isChecked }));

  render() {
    const fooStyles = this.state.isChecked ? "hidden" : null;
    const barStyles = this.state.isChecked ? "" : "hidden";

    return (
      <div className="container">
        <Checkbox color="secondary" onChange={this.handleOnChange} />
        <div id="foo">
          <h1 className={fooStyles}>FOO</h1>
        </div>
        <div id="bar">
          <h1 className={barStyles}>BAR</h1>
        </div>
      </div>
    );
  }
}

export default App;
