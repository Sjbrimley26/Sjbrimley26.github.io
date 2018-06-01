import React, { Component } from "react";
import { withRouter } from 'react-router';

class About extends Component {
  constructor(props) {
    super(props);
  }

  navTo = (url) => {
    return this.props.history.push(url);
  }

  render () {
    return (
      <div className="mainBody">
        <div className="sidebar">
          <button onClick={this.navTo.bind(this, "/")}>Return</button>
        </div>
        <div className="mainContent">
          <p> Spencer is cool</p>
          <p className="shiftRight">He likes potatoes</p>
          <p className="shiftLeft">And eggs!</p>
        </div>
      </div>
    )
  }
}

export default withRouter(About);