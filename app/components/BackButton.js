import React from "react";

const BackButton = ({ top, left }) => {
  const goHome = e => {
    window.location.toString().indexOf("file") != -1 ?
      window.location.replace("file:///D:/Node/Sjbrimley26.github.io/app/build/index.html#/") :
      window.location.replace("https://sjbrimley26.github.io");
  };

  return (
    <div
      className="backButton"
      style={{ top: top + "px", left: left + "px" }}
      onClick={goHome}>
    <span>←</span>
    </div>
  );
};

export default BackButton;