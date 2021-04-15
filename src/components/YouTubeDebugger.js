// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here

import React from "react";

class YouTubeDebugger extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }

  handleBitrateClick = () => {
    this.setState((prevState) => {
      console.log(prevState);
      return {
        settings: {
          ...this.state.settings,
          bitrate: 12,
        },
      };
    });
  };

  handleResolutionClick = () => {
    this.setState((prevState) => {
      console.log(prevState);
      return {
        settings: {
          ...this.state.settings,
          video: {
            ...this.state.settings.video,
            resolution: "720p",
          },
        },
      };
    });
  };

  render() {
    return (
      <div>
        YouTubeDebugger
        <button onClick={this.handleBitrateClick} className={"bitrate"}>
          Bitrate
        </button>
        <button onClick={this.handleResolutionClick} className={"resolution"}>
          Resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
