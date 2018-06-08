import React, { Component } from "react";
import { withRouter } from 'react-router';

class Portfolio extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const project = (index, title, url, gitUrl) => {
      return { index, title, url, gitUrl };
    }

    const projects = [
      project (
        0,
        "Pinterest Clone",
        "https://elated-laborer.glitch.me/",
        "https://github.com/chingu-voyage4/Bears-Team-26"
      ),
      project (
        1,
        "Fair Rentals",
        "https://fair-rentals.herokuapp.com/",
        "https://github.com/chingu-voyage3/fair-rentals"
      ),
      project (
        2,
        "Shop.DoorManStan",
        "https://shop.doormanstan.com/mouldings",
        null
      ),
      project (
        3,
        "Google Sheets CRUD",
        null,
        "https://github.com/Sjbrimley26/sheets-crud"
      ),
      project (
        4,
        "E-Juice DB",
        null,
        "https://github.com/Sjbrimley26/ejuices"
      ),
      project (
        5,
        "Tic Tac Toe",
        "https://codepen.io/sjbrimley26/pen/yoGeem",
        null
      ),
      project (
        6,
        "Weather App",
        'https://codepen.io/sjbrimley26/pen/LjmZdq',
        null
      ),
      project (
        7,
        "Wiki App",
        "https://codepen.io/sjbrimley26/pen/LjmMgp",
        null
      )
    ];

    console.log(projects);

    

    return (
      <div>
      </div>
    );
  }
}

export default withRouter(Portfolio);