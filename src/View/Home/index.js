import React from "react";
import {
  Wrapper,
  ImageBackground,
  HomeContent,
  HomeTitle,
  HomeDesc
} from "./styled";
import { Carousel } from "../../Component/Carousel";
import wallpaperMain from "../../Assets/wallpaperMain.jpg";
import { Background } from "../../Component/Background";

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Background imageBackground={wallpaperMain}></Background>
        <HomeContent>
          <HomeTitle>Welcome!</HomeTitle>
          <HomeDesc>Your one stop to the latest collection of games</HomeDesc>
          <Carousel></Carousel>
        </HomeContent>
      </Wrapper>
    );
  }
}
export default App;
