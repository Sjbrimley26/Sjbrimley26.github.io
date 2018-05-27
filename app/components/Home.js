import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainColumn">
        <h1>Welcome!</h1>
        <button className="link">About</button>
        <button className="link">About</button>
      </div>
    );
  }
}

export default Home;
