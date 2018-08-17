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
    const renderLink = (link, i) => {
      return (
        <button
          onClick={this.navTo.bind(null, `/${link}`)}
          className="link"
          key={i}
        >
        { link.split("")[0].toUpperCase() + link.slice(1) }
        </button>
      );
    };

    const links = [
      "about",
      "portfolio",
      "contact"
    ];

    return (
      <div className="mainColumn">
      <div className="background"/>
        <div className="bigS">S</div>
        <div className="links">
          { links.map((link, i) => renderLink(link, i)) }
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
