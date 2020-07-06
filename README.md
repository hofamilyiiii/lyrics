# lyrics

Get song lyrics from `Genius` based on song currently playing on `Spotify`.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### How it works?

Get user's currently played song's details on `Spotify` and redirect user to `Genius` lyric page.

### Prerequisites

### Installing

```
npm install
```

### Credentials and Registering your App

For this code to work, you need to
[register](https://developer.spotify.com/) an account in Spotify for Developers and
[add](https://developer.spotify.com/dashboard/applications) an application, set your main website URI and redirect URI for the application settings,
lastly add the client ID to [/config.json](/config.json).

Update [/config.json](/config.json) to contain your client ID:

```javascript
{
  "SPOTIFY": {
    "CLIENT_ID": "xx",
    ..
  }
}
```

## Authors

- **Ho Xin Jun**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
