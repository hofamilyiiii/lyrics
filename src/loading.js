import React, { Component } from "react";
import "./loading.scss";

export default class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <div id="flip-content">
          <div className="container">
            <p className="text">I'm</p>

            <ul className="list">
              <li className="item">FABULOUS!</li>
              <li className="item">FULAMAK!</li>
              <li className="item">LEGENDARY!</li>
              <li className="item">HOSOME!</li>
            </ul>
          </div>
        </div>

        <div id="redirect-container">
          <span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </span>
          <div className="base">
            <span></span>
            <div className="face"></div>
          </div>
          <div className="longfazers">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1>Redirecting</h1>
        </div>
      </div>
    );
  }
}
