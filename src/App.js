import React, { Component } from "react";
import Loading from "./loading";
import Error from "./error";
import { token, getCurrentTrack, authorizeAccount } from "./spotify";
import { removeAllSpecialCharacters } from "./utils";
const SPOTIFY_CONFIGS = require("./config.json").SPOTIFY;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  render() {
    let content;

    if (this.state.hasError) {
      content = <Error></Error>;
    } else {
      content = <Loading></Loading>;
    }

    return (
      <div className="App">
        {content}
      </div>
    );
  }

  async getData() {
    const currentlyPlayingTrack = await getCurrentTrack();

    if (currentlyPlayingTrack) {
      let artistName = removeAllSpecialCharacters(
        currentlyPlayingTrack.data.item.artists[0].name.toLowerCase()
      );
      artistName = artistName
        .split(" ")
        .filter(char => char)
        .join("-");

      let songTitle = removeAllSpecialCharacters(
        currentlyPlayingTrack.data.item.name.toLowerCase()
      );
      songTitle = songTitle
        .split(" ")
        .filter(char => char)
        .join("-");
      SPOTIFY_CONFIGS.UNWANTED_STRINGS.forEach(unwantedString => {
        songTitle = songTitle.split(`-${unwantedString.toLowerCase()}`)[0];
      });

      if (artistName && songTitle) {
        window.location.href = `https://genius.com/${artistName}-${songTitle}-lyrics`;
      } else {
        this.setState({ hasError: true });
      }
    } else {
      this.setState({ hasError: true });
    }
  }

  async componentDidMount() {
    if (token) {
      this.getData().catch(error => {
        console.error(error);
        this.setState({ hasError: true });
      });
    } else {
      authorizeAccount();
    }
  }
}
