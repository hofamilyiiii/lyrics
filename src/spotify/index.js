import axios from "axios";
import querystring from "query-string";
import {
  getHashParams
} from "../utils";

const SPOTIFY_CONFIGS = require("../config.json").SPOTIFY;
const REDIRECT_URI = `${window.location.origin}`;

export const authorizeAccount = () => {
  const scope = "user-read-currently-playing";

  window.location.href = `https://accounts.spotify.com/authorize?${querystring.stringify(
    {
      response_type: "token",
      show_dialog: true,
      client_id: SPOTIFY_CONFIGS.CLIENT_ID,
      scope: scope,
      redirect_uri: REDIRECT_URI
    }
  )}`;
};

export const getAccessToken = () => {
  const { error, access_token } = getHashParams();

  if (error) {
    console.error(error);
  }

  return access_token;
};

export const token = getAccessToken();

const headers = {
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json"
};

export const getCurrentTrack = () =>
  axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
    headers
  });
