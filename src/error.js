import React, { Component } from "react";
import "./error.scss";

export default class Error extends Component {
  render() {
    document.getElementsByTagName("body")[0].className = "error";

    return (
      <div className="Error">
        <div className="glitch" data-text="GLITCH">
          GLITCH
        </div>

        <div className="content">
          No track?! <br />
          What's
          <section className="exaggeration">
            <div className="exaggeration-title">WONG</div>
          </section>
          with ya? <br />
          Just play
          <section className="exaggeration">
            <div className="exaggeration-title">ANYTHING</div>
          </section>
          on <b>Spotify</b> and <br />
          <a onClick={this.refreshPage} class="hover-shadow hover-color">
            <span>T</span>
            <span>R</span>
            <span>Y</span>
            <span> </span>
            <span>A</span>
            <span>G</span>
            <span>A</span>
            <span>I</span>
            <span>N</span>
            <span>!</span>
            <span>!</span>
            <span>!</span>
          </a>
        </div>
      </div>
    );
  }

  refreshPage() {
    window.location.reload();
  }
}
