import React from "react";

const Contact = () => {

  const navTo = url => {
    return window.location = url;
  };

  const goHome = e => {
    if ( e.target.className == "fullscreen" ) {
      window.location.toString().indexOf("file") != -1 ?
      navTo("file:///D:/Node/Sjbrimley26.github.io/app/build/index.html#/") :
      navTo("https://sjbrimley26.github.io");
    }
  };

  return <div className="fullscreen" onClick={goHome}>
      <div className="contact">
        <h2><span>Want to get in touch?</span></h2>
        <form action="https://formspree.io/sjbrimley26@live.com" method="POST">
          <div className="column">
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" />
            <label htmlFor="_replyto">Email: </label>
            <input type="email" name="_replyto" />
            <label htmlFor="_subject">Topic: </label>
            <input type="text" name="_subject" />
            <input type="submit" className="submitter" value="Send" />
          </div>
        </form>
      </div>
    </div>;
};

export default Contact;