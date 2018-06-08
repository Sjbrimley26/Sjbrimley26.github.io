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
          <p>
            Hi, my name is Spencer Brimley!
          </p>
          <p>
            When I started college, I hadn't intended to focus on the programming
            or computer science fields, I had originally wanted to be an engineer. However, I took
            an intro to C++ class and I enjoyed it a ton! The lectures weren't great but I loved the labs 
            and the process, but it seemed like if I could just find the right resources, I might be able
            to learn the right skills without paying the high college tuition.
          </p>
          <p>
            I've learned a ton thanks to programs like freeCodeCamp, which served as both an introductory
            course and a source of endless help thanks to their forums. Another program
            which really helped my advance in my skills was Chingu, which groups developers into teams to
            create a project! I have completed two of their "Voyages" and you can check out the
            somewhat finished products on my portfolio page. In my first voyage we made an apartment
            review website, and in the second a Pinterest Clone.
          </p>
          <p>
            I work selling doors, but I've been able to use programming to help out with little tasks around
            the office since we're a really small company with no real I.T. department. I used SQL to parse CSV
            documents to generate reports at first and later on began web development by maintaining our legacy website
            and later creating a simple database app for looking up different items.
          </p>
          <p>
            Thanks for visiting my website! If something stood out to you, let
            me know what you think!
          </p>
        </div>
      </div>
    )
  }
}

export default withRouter(About);