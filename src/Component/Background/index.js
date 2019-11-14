import React, { Component } from "react";
import { ImageBackground } from "./styled";

export class Background extends Component {
  render() {
    return (
      <ImageBackground
        imageBackground={this.props.imageBackground}></ImageBackground>
    );
  }
}

export default Background;
