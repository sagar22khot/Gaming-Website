import styled, { keyframes } from "styled-components";
import { zoomIn, rubberBand } from "react-animations";

const bounceAnimation = keyframes`${zoomIn}`;
const rubberBands = keyframes`${rubberBand}`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`;

const ImageBackground = styled.div`
  background-image: url(${props => props.imageBackground});
  background-color: #cccccc;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const HomeContent = styled.div`
  position: absolute;
  padding: 20px;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  // border: 1px solid white;
  animation: 1s ${bounceAnimation};
`;

const HomeTitle = styled.h1`
  font-family: "Audiowide", cursive;
  color: grey;
  text-align: center;
  font-size: 45px;
  font-weight: bold;
`;

const HomeDesc = styled.p`
  font-family: "McLaren", cursive;
  color: grey;
  padding: 10px 40px 40px;
  font-size: 20px;
  text-align: center;
  max-width: 800px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export { Wrapper, ImageBackground, HomeContent, HomeTitle, HomeDesc };
