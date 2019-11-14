import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

/**
 * Left Div ********************************************
 */
const LeftDiv = styled.div`
  width: ${props => (props.toggleDivHide ? 20 : 0)}%;
  height: calc(100% - 70px);
  position: absolute;
  // top: 50%;
  bottom: 0%;
  left: 0%;
  opacity: 0.9;
  // transform: translateY(-50%);
  background: linear-gradient(
    45deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(105, 99, 98, 1) 100%,
    rgba(254, 196, 148, 0.8813900560224089) 100%
  );
  transition: width 100ms linear;
  @media screen and (min-width: 1400px) and (max-width: 2000px) {
    // font-size: 22px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    // font-size: 18px;
  }
  @media screen and (max-width: 999px) {
    // font-size: 15px;
    width: ${props => (props.toggleDivHide ? 70 : 0)}%;
    z-index: 10;
    opacity: 1;
  }
`;
const InnerDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: black;
  overflow: scroll;
`;
const MenuItems = styled.div`
  width: 100%;
  height: 12.5%;
  font-family: "Oswald", sans-serif;
  text-align: center;
  text-decoration: none;
  display: block;
`;
const GeneralAnchor = styled.a`
  color: white;
  text-decoration: none;
  display: block;
  width: 50%;
  padding: 10px;
  &:hover {
    background-color: grey;
  }
  font-weight: bold;
  background-color: #5e320e;
  cursor: pointer;
  border: none;
  @media screen and (min-width: 1400px) and (max-width: 2000px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    font-size: 16px;
  }
  @media screen and (max-width: 999px) {
    font-size: 14px;
  }
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  border: 0.5px solid white;
  border-radius: 10px;
  box-shadow: 0 9px 5px #5c5855;
  &:active {
    background-color: grey;
    box-shadow: 0 2px #666;
    transform: translateY(-42%) translateX(-50%);
  }
`;

/**
 * Right Div ********************************************
 */
const RightDiv = styled.div`
  width: ${props => (props.toggleDivHide ? 80 : 100)}%;
  height: calc(100% - 70px);
  position: absolute;
  // top: 50%;
  bottom: 0%;
  right: 0%;
  opacity: 0.9;
  // transform: translateY(-50%);
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (min-width: 1400px) and (max-width: 2000px) {
    // font-size: 22px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    // font-size: 18px;
  }
  @media screen and (max-width: 999px) {
    // font-size: 15px;
    width: 100%;
  }
`;
const InnerDivRight = styled.div`
  width: 90%;
  height: 90%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: #5e320e;
  padding: 1.5%;
  overflow: scroll;
  border-radius: 10px;
`;
const InfoTitle = styled.h3`
  padding: 2%;
  margin-top: 2%;
  font-family: "Oswald", sans-serif;
  color: white;
  text-align: center;
  font-size: 40px;
  background-color: #573512;
  border: 2px solid white;
  border-radius: 10px;
  box-shadow: 10px 15px 8px black;
`;
const DisplayWrapper = styled.div`
  float: right;
  width: 40%;
  height: 80%;
  @media screen and (max-width: 999px) {
    width: 100%;
    clear: both;
  }
`;
const DisplayPicture = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-image: url(${props => props.imageBackground});
  background-color: #cccccc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 5px solid white;
  border-radius: 10%;
  box-shadow: 10px 15px 8px black;
`;
const Description = styled.div`
  width: 60%;
  height: 80%;
  @media screen and (max-width: 999px) {
    width: 100%;
    clear: both;
    height: auto;
  }
`;
const DepcriptionPara = styled.p`
  background-color: #573512;
  height: 80%;
  overflow: scroll;
  font-family: "Oswald", sans-serif;
  color: white;
  font-size: 25px;
  text-align: justify;
  padding: 2%;
  margin-top: 5%;
  @media screen and (min-width: 1400px) and (max-width: 2000px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    font-size: 18px;
  }
  @media screen and (max-width: 999px) {
    font-size: 15px;
    width: auto;
  }
  border: 2px solid white;
  border-radius: 20px;
  white-space: normal;
  box-shadow: 10px 15px 8px black;
`;
const InfoWrapper = styled.div`
  margin-top: 5%;
  width: 100%;
  height: 60%;
  background-color: #573512;
  border: 2px solid white;
  border-radius: 10px;
  // padding: 1%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 10px 10px 8px black;
  overflow: scroll;
  @media screen and (min-width: 1400px) and (max-width: 2000px) {
    // font-size: 22px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    // font-size: 18px;
  }
  @media screen and (max-width: 999px) {
    // font-size: 15px;
    // width: 95%;
    // margin: 2.5%;
    height: auto;
  }
`;

const Info = styled.div`
  float: left;
  text-align: center;
  width: 49%;
  height: 23%;
  font-family: "Oswald", sans-serif;
  color: white;
  z-index: 3;
  background-color: #663f0d;
  margin: 0.5%;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 3px 3px 8px black;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1400px) and (max-width: 2000px) {
    // font-size: 22px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    // font-size: 18px;
  }
  @media screen and (max-width: 999px) {
    // font-size: 15px;
    width: 95%;
    margin: 2.5%;
    height: 50px;
  }
`;
const InnerInfoHeader = styled.h3`
  float: left;
  @media screen and (min-width: 1400px) and (max-width: 2000px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    font-size: 17px;
  }
  @media screen and (max-width: 999px) {
    font-size: 14px;
  }
`;
const InnerInfo = styled.p`
  display: inline-block;
  padding: 2px 10px;
  @media screen and (min-width: 1400px) and (max-width: 2000px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1000px) and (max-width: 1399px) {
    font-size: 17px;
  }
  @media screen and (max-width: 999px) {
    font-size: 14px;
  }
`;

export {
  Wrapper,
  LeftDiv,
  RightDiv,
  InnerDiv,
  InnerDivRight,
  InfoTitle,
  Description,
  Info,
  MenuItems,
  DisplayPicture,
  InnerInfo,
  InnerInfoHeader,
  DisplayWrapper,
  DepcriptionPara,
  GeneralAnchor,
  InfoWrapper
};
