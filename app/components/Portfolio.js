import React, { Component } from "react";
import { withRouter } from 'react-router';

import pinterestImage from "../assets/images/pinterest_clone.jpg";
import juiceImage from "../assets/images/e-juice_db.jpg";
import rentalImage from "../assets/images/fair_rentals.jpg";
import sheetsImage from "../assets/images/google_sheets_crud.jpg";
import doorImage from "../assets/images/shop.doormanstan.jpg";
import toeImage from "../assets/images/tic_tac_toe.jpg";
import weatherImage from "../assets/images/weather_app.jpg";
import wikiImage from "../assets/images/wiki_app.jpg";
import dhrImage from "../assets/images/dhr.jpg";

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = setInitialState();
  }

  navTo = (url) => {
    return this.props.history.push(url);
  }

  render () {
    return (
      <div
        className="projectWrapper"
        onClick={this.navTo.bind(this, "/")}
        key={this.state.seed}
      >
      <main>
        { renderProjects(this) }
        { setTimeout(removeAnimationClasses, 50) }
      </main>
      </div>
    );
  }
}

const setInitialState = () => {
  const project_images = {
    "E-Juice DB": juiceImage,
    "Pinterest Clone": pinterestImage,
    "Fair Rentals": rentalImage,
    "Google Sheets CRUD": sheetsImage,
    "DoorManStan": doorImage,
    "Tic Tac Toe": toeImage,
    "Weather App": weatherImage,
    "Wiki App": wikiImage,
    "Dad\'s Home Restoration": dhrImage,
  };

  const project = (title, url, gitUrl) => {
    return {
      title,
      url,
      gitUrl,
      image: project_images[title]
    };
  };

  return {
    active_project_index: 0,
    direction: undefined,
    seed: 0,
    projects: [
      project(
        "Pinterest Clone",
        "https://elated-laborer.glitch.me/",
        "https://github.com/chingu-voyage4/Bears-Team-26"
      ),
      project(
        "Fair Rentals",
        "https://fair-rentals.herokuapp.com/",
        "https://github.com/chingu-voyage3/fair-rentals"
      ),
      project(
        "DoorManStan",
        "https://shop.doormanstan.com/mouldings",
        undefined
      ),
      project(
        "Google Sheets CRUD",
        undefined,
        "https://github.com/Sjbrimley26/sheets-crud"
      ),
      project(
        "E-Juice DB",
        undefined,
        "https://github.com/Sjbrimley26/ejuices"
      ),
      project(
        "Tic Tac Toe",
        "https://codepen.io/sjbrimley26/pen/yoGeem",
        undefined
      ),
      project(
        "Weather App",
        'https://codepen.io/sjbrimley26/pen/LjmZdq',
        undefined
      ),
      project(
        "Wiki App",
        "https://codepen.io/sjbrimley26/pen/LjmMgp",
        undefined
      ),
      project(
        "Dad\'s Home Restoration",
        undefined,
        "https://github.com/Sjbrimley26/dadsHomeRestoration"
      )
    ]
  };
};

const renderProjects = context => {

  const {
    active_project_index,
    projects,
    direction,
    seed
  } = context.state;

  const rightIndex =
    active_project_index + 1 > projects.length - 1 ?
      0 :
      active_project_index + 1;

  const leftIndex =
    active_project_index - 1 < 0 ?
      projects.length - 1 :
      active_project_index - 1;

  const create_project_div = (project, opt, direction, seed) => {
    let projectClass = "project";

    if (opt === "left") {
      projectClass += " project--inactive-left"
    }

    if (opt === "right") {
      projectClass += " project--inactive-right"
    }

    if (direction) {
      projectClass += ` spin--${direction}`;
    } else {
      projectClass += " fadeIn";
    }

    return (
      <div
        key={Math.random()}
        className={projectClass}
        onClick={e => e.stopPropagation()}
      >
        <div
          key={seed + Math.random() * 10}
          className="project_img_div"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="title">
            <p>
              {project.title}
            </p>
          </div>
        </div>
        {
          project.url ? (
            <div>
              {
                project.url.indexOf("codepen") > 0 ? (
                  <a href={project.url} target="blank">
                    Visit the CodePen!
                    </a>
                ) : (
                    <a href={project.url} target="blank">
                      Visit the Site!
                    </a>
                  )
              }
            </div>
          ) : null
        }
        {
          project.url && project.gitUrl ? (
            <div>
              <p>or</p>
            </div>
          ) : null
        }
        {
          project.gitUrl ? (
            <div>
              <a href={project.gitUrl} target="blank">Visit the Git Repository!</a>
            </div>
          ) : null
        }
      </div>
    );
  }

  const cycleRight = e => {
    e.stopPropagation();
    if (active_project_index + 1 > projects.length - 1) {
      context.setState({
        active_project_index: 0,
        direction: "right",
        seed: Date.now()
      });
    }
    else {
      context.setState({
        active_project_index: active_project_index + 1,
        direction: "right",
        seed: Date.now()
      });
    }
  }

  const cycleLeft = e => {
    e.stopPropagation();
    if (active_project_index - 1 < 0) {
      context.setState({
        active_project_index: projects.length - 1,
        direction: "left",
        seed: Date.now()
      });
    }
    else {
      context.setState({
        active_project_index: active_project_index - 1,
        direction: "left",
        seed: Date.now()
      });
    }
  }

  return [
    <button
      key={seed}
      onClick={cycleLeft}
      aria-label="cycle left"
      className="cycle cycle--left fadeIn"
    />,
    <button
      key={seed + 10}
      onClick={cycleRight}
      aria-label="cycle right"
      className="cycle cycle--right fadeIn"
    />,
    create_project_div(projects[active_project_index], "center", direction, seed),
    create_project_div(projects[leftIndex], "left", direction, seed),
    create_project_div(projects[rightIndex], "right", direction, seed)
  ];
};

// This hinges on the animation class being the last one in the classList

const removeAnimationClasses = () => {
  const createArrayFromClass = className => {
    return Array.from(
      document.getElementsByClassName(className)
    );
  };

  [
    createArrayFromClass("projectWrapper"),
    createArrayFromClass("cycle"),
    createArrayFromClass("project")
  ].reduce((result = [], arr) => {
    arr.forEach(item => result.push(item))
    return result;
  }
  ).forEach(item => {
    const {
      className: name
    } = item;
    const sIndex = name.lastIndexOf(" ");
    const index =
      sIndex > -1 ?
        sIndex :
        500;
    item.className = name.slice(0, index);
  });
};

export default withRouter(Portfolio);