import React from "react";
import BackButton from "./BackButton";

const Contact = () => {

  return <div className="fullscreen">
      <div className="contact">
        <BackButton top="5" left="5" />
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