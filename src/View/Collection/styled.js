import styled, { keyframes } from "styled-components";
import { fadeIn, bounceOut } from "react-animations";
import { Redirect, Link } from "react-router-dom";

const animationfadeIn = keyframes`${fadeIn}`;

const Wrapper = styled.div``;

const CollectionWrapper = styled.div`
  position: absolute;
  width: calc(100% - 250px);
  height: calc(100% - 250px);
  // bottom: 10%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%)  translateY(-50%);
  overflow: hidden;
  position: absolute:
  bottom: 0%;
  // border: 1px solid white;
  @media screen and (min-width: 1400px) and (max-width: 2000px) {
    width: calc(100% - 200px);
  }
  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    width: calc(100% - 150px);
  }
  @media screen and (max-width: 999px) {
    width: calc(100% - 120px);
  }
  
`;

const Game = styled.div`
  position: relative;
  width: 90%;
  margin: 5% 5%;
  height: 90%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transform: ${props => props.cardflip && "rotateY(180deg)"};
`;

const GameWallpaper = styled.div`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 75%;
  background-image: url(${props => props.imagesrc});
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: height 600ms linear;
`;
const GameTitle = styled.h4`
  color: white;
  font-family: "Lobster", cursive;
  font-size: 20px;
  @media screen and (min-width: 1400px) and (max-width: 2000px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    font-size: 18px;
  }
  @media screen and (max-width: 999px) {
    font-size: 16px;
  }
`;
const GameDesc = styled.h4`
  color: white;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  @media screen and (max-width: 999px) {
    font-size: 12px;
  }
`;

const GameDetails = styled.div`
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 25%;
  background-color: black;
  text-align: center;
  bottom: 0%;
  // border: 1px solid red;
`;
const PreviousButton = styled.div`
  display: ${props => (props.visible < 2 ? "none" : "inline-block")};
  height: 100px;
  width: 150px;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translateY(-50%);
  background-image: url(${props => props.imageBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  animation: 1s ${animationfadeIn};
  cursor: pointer;
  @media screen and (min-width: 1400px) and (max-width: 2000px) {
    width: 100px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    width: 75px;
  }
  @media screen and (max-width: 999px) {
    width: 60px;
  }
`;
const NextButton = styled.div`
  height: 100px;
  width: 150px;
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 0%;
  transform: translateY(-50%);
  background-image: url(${props => props.imageBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  animation: 5s ${animationfadeIn};
  cursor: pointer;
  @media screen and (min-width: 1400px) and (max-width: 2000px) {
    width: 100px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    width: 75px;
  }
  @media screen and (max-width: 999px) {
    width: 60px;
  }
`;

const HiddenDetails = styled.div`
  background-color: black;
  border: 1px solid #2980b9;
  color: white;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const GameWrap = styled.div`
  background-color: transparent;
  perspective: 1000px;
  display: inline-block;
  float: left;
  // margin: 3px;
  // padding: 3px;
  @media screen and (min-width: 1400px) {
    width: 20%;
    height: 50%;
  }
  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    width: 25%;
    height: 300px;
  }
  @media screen and (max-width: 999px) {
    width: 50%;
    height: 350px;
  }
  transition: width 100ms linear, height 100ms linear;
`;

const KnowMoreLink = styled(Link)`
  width: 100%;
  color: red;
  font-family: "Oswald", sans-serif;
  text-decoration: none;
  position: absolute;
  top: 50%;
  left: 50%
  transform: translateY(-50%) translateX(-50%);
  font-size: 20px;
  animation: 5s ${animationfadeIn};
`;

const TempWrap = styled.div`
  width: 100%;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export {
  Wrapper,
  CollectionWrapper,
  Game,
  GameTitle,
  GameWallpaper,
  PreviousButton,
  NextButton,
  GameDetails,
  GameDesc,
  HiddenDetails,
  GameWrap,
  KnowMoreLink,
  TempWrap
};
