import React from "react";
import "../style/newsstyling.scss";
export default function TodoLayout({ children }) {
  return (
    <React.Fragment>
      <div style={{ background: "crimson" }} className="jumbotron card1">
        <h1 className="display-3 text-center headingStyle">
          <span style={{ color: "crimson" }}>T</span>o
          <span style={{ color: "crimson" }}>d</span>o
          <span style={{ color: "crimson" }}>'s</span>
        </h1>
        <p className="lead text-center text-light">Maintain your todo</p>
        <hr className="my-4" />
        {children()}
      </div>
    </React.Fragment>
  );
}
