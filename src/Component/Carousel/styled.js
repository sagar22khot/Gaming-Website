import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 1100px;
  // height: 200px;
  // border: 1px solid green;
`;

const SlideWindow = styled.div`
  width: 720px;
  height: 200px;
  // border: 1px solid red;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
`;

const SliderDataWrapper = styled.div`
  width: 2400px;
  height: 200px;
  // border: 2px solid red;
  position: relative;
  left: ${props => props.currentCardPosition}px;
  transition: left 300ms linear;
`;

const SliderData = styled.div`
  display: inline-block;
  width: 240px;
  height: 200px;
`;

const Content = styled.div`
  width: 80%;
  height: 80%;
  text-align: center;
  background-color: white;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%)
    scale(${props => (props.selected === true ? "1.3" : "1")});
  transition: transform 300ms linear;
  background-image: url(${props => props.featureImage});
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 5%;
`;

const RightArrow = styled.div`
  display: ${props =>
    props.currentCardPosition === -props.slideWidth * props.minSlide && "none"};
  width: 50px;
  height: 100px;
  background-color: transparent;
  position: absolute;
  right: 150px;
  bottom: 50%;
  transform: translateY(50%);
  z-index: 10;
  background-image: url(${props => props.arrowImg});
  // height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;

const LeftArrow = styled.div`
  display: ${props =>
    props.currentCardPosition === props.slideWidth * (props.maxSlide - 1) &&
    "none"};
  width: 50px;
  height: 100px;
  background-color: transparent;
  position: absolute;
  left: 150px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-image: url(${props => props.arrowImg});
  // height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
`;
const HiddenDetails = styled.h1`
  display: ${props => (props.hiddenDivToggle === false ? "none" : "inline")};
  position: absolute;
  bottom: 0%;
  // left: -100%;
  transform: translateX(-1%);
  background-color: black;
  width: 240px;
  height: 35px;
  opacity: 80%;
  color: white;
  border: 2px solid red;
  border-radius: 5% 5% 0% 0%;
  font-size: 15px;
  text-align: center;
`;

export {
  Wrapper,
  SlideWindow,
  SliderData,
  SliderDataWrapper,
  Content,
  RightArrow,
  LeftArrow,
  HiddenDetails
};
