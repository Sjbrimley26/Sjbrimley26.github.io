import React, { Component } from "react";
import { withRouter } from 'react-router';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  navTo = (url) => {
    return this.props.history.push(url);
  }

  render() {
    return (
      <div className="mainColumn">
      <div className="background"/>
        <div className="bigS">S</div>
        <div className="bumper"/>
        <button onClick={this.navTo.bind(null, "/about")} className="link">About</button>
        <button onClick={this.navTo.bind(null, "/portfolio")}  className="link">Portfolio</button>
        <button onClick={this.navTo.bind(null, "/contact")}  className="link">Contact</button>
        <button onClick={this.navTo.bind(null, "/survey")}  className="link">Survey</button>
      </div>
    );
  }
}

export default withRouter(Home);
