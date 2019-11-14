import React, { Component } from "react";
import { Background } from "../../Component/Background";
import { SiteInfo } from "../../Component/SiteInfo";
import infopic from "../../Assets/infopic.jpg";
import {
  Wrapper,
  LeftDiv,
  RightDiv,
  InnerDiv,
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
  InfoWrapper,
  InnerDivRight
} from "./styled";
import { types } from "util";
import BurgerButton from "../../Component/BurgerButton";
const axios = require("axios");
let menuData = [
  "Rating",
  "Genres",
  "Platforms",
  "ESRB_Rating",
  "Metacritic",
  "Released",
  "Developers",
  "Stores"
];

export class GameInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataToDisplay: [],
      gameDetail: null,
      prevGrid: null,
      sliderHide: window.innerWidth > 999 ? false : true,
      toggleDivHide: window.innerWidth > 999 ? true : false,
      externalTrigger: undefined
    };
  }

  getGameInfo = () => {
    const url = `https://api.rawg.io/api/games/` + this.props.match.params.id;
    return axios.get(url).then(response => response.data);
  };

  updateDimensions = () => {
    window.innerWidth > 999
      ? this.state.sliderHide !== false &&
        this.setState({ sliderHide: false, toggleDivHide: true })
      : this.state.sliderHide !== true &&
        this.setState({ sliderHide: true, toggleDivHide: false });
    this.forceUpdate();
  };

  componentDidMount() {
    this.getGameInfo().then(response => {
      this.setState(
        {
          gameDetail: response
        },
        () => {
          console.log("Data1: ", this.state.gameDetail);
        }
      );
    });
    window.addEventListener("resize", this.updateDimensions);
  }

  divHideFunction = external => {
    console.log("logger", external);
    this.setState({
      toggleDivHide: this.state.toggleDivHide === true ? false : true,
      externalTrigger: external
    });
  };

  render() {
    return (
      <Wrapper>
        <Background
          imageBackground={
            this.state.gameDetail && this.state.gameDetail.background_image
          }></Background>
        <BurgerButton
          displayToggle={this.state.sliderHide}
          extraFunctionality={this.divHideFunction}
          externalTrigger={this.state.externalTrigger}></BurgerButton>
        <LeftDiv toggleDivHide={this.state.toggleDivHide}>
          <InnerDiv>
            {menuData.map((val, i) => (
              <MenuItems>
                <GeneralAnchor
                  href={"#" + i}
                  onClick={() =>
                    this.setState(
                      {
                        prevGrid: i
                      },
                      () => (
                        window.innerWidth < 1000 && this.divHideFunction(true),
                        document.getElementById(i) &&
                          (document.getElementById(i).style.backgroundColor =
                            "#61340f"),
                        document.getElementById(i) &&
                          (document.getElementById(i).style.width =
                            this.state.sliderHide === false ? "49%" : "95%"),
                        document.getElementById(i) &&
                          (document.getElementById(i).style.borderRadius =
                            "10px"),
                        document.getElementById(i) &&
                          (document.getElementById(i).style.boxSizing =
                            "border-box"),
                        document.getElementById(i) &&
                          (document.getElementById(i).style.border =
                            "2px solid #e8892b"),
                        document.getElementById(i) &&
                          (document.getElementById(i).style.height =
                            this.state.sliderHide === false ? "23%" : "50px")
                      ),

                      this.state.prevGrid !== null &&
                        document.getElementById(this.state.prevGrid) &&
                        document
                          .getElementById(this.state.prevGrid)
                          .setAttribute("style", "background-color: #663f0d;")
                    )
                  }>
                  {val}
                </GeneralAnchor>
              </MenuItems>
            ))}
          </InnerDiv>
        </LeftDiv>
        <RightDiv
          toggleDivHide={this.state.toggleDivHide}
          imageBackground={
            this.state.gameDetail && this.state.gameDetail.background_image
          }>
          <InnerDivRight>
            <InfoTitle>
              {this.state.gameDetail && this.state.gameDetail.name}
            </InfoTitle>
            <DisplayWrapper>
              <DisplayPicture
                imageBackground={
                  this.state.gameDetail &&
                  this.state.gameDetail.background_image
                }></DisplayPicture>
            </DisplayWrapper>

            <Description>
              <DepcriptionPara>
                <h3>Info:</h3>
                {this.state.gameDetail && this.state.gameDetail.description_raw}
              </DepcriptionPara>
            </Description>
            <InfoWrapper>
              <Info id={0}>
                <InnerInfoHeader>Rating:</InnerInfoHeader>
                <InnerInfo>
                  {this.state.gameDetail
                    ? this.state.gameDetail.rating
                    : "Not Available"}
                </InnerInfo>
              </Info>
              <Info id={1}>
                <InnerInfoHeader>Genre:</InnerInfoHeader>
                {this.state.gameDetail
                  ? this.state.gameDetail.genres.map((val, i) => (
                      <InnerInfo>{val.name}</InnerInfo>
                    ))
                  : "Not Available"}
              </Info>
              <Info id={2}>
                <InnerInfoHeader>Platform:</InnerInfoHeader>

                {this.state.gameDetail
                  ? this.state.gameDetail.platforms.map((val, i) => (
                      <InnerInfo>{val.platform.name}</InnerInfo>
                    ))
                  : "Not Available"}
              </Info>
              <Info id={3}>
                <InnerInfoHeader>ESRB Rating:</InnerInfoHeader>
                <InnerInfo>
                  {this.state.gameDetail && this.state.gameDetail.esrb_rating
                    ? this.state.gameDetail.esrb_rating.name
                    : "Not Available"}
                </InnerInfo>
              </Info>
              <Info id={4}>
                <InnerInfoHeader>Metacritic:</InnerInfoHeader>
                <InnerInfo>
                  {this.state.gameDetail
                    ? this.state.gameDetail.metacritic
                    : "Not Available"}
                </InnerInfo>
              </Info>
              <Info id={5}>
                <InnerInfoHeader>Released:</InnerInfoHeader>
                <InnerInfo>
                  {this.state.gameDetail
                    ? this.state.gameDetail.released
                    : "Not Available"}
                </InnerInfo>
              </Info>
              <Info id={6}>
                <InnerInfoHeader>Developer:</InnerInfoHeader>
                {this.state.gameDetail
                  ? this.state.gameDetail.developers.map((val, i) => (
                      <InnerInfo>{val.name}</InnerInfo>
                    ))
                  : "Not Available"}
              </Info>
              <Info id={7}>
                <InnerInfoHeader>Store:</InnerInfoHeader>
                {this.state.gameDetail
                  ? this.state.gameDetail.stores.map((val, i) => (
                      <InnerInfo>{val.store.name}</InnerInfo>
                    ))
                  : "Not Available"}
              </Info>
            </InfoWrapper>
          </InnerDivRight>
        </RightDiv>
        {/* {setTimeout(() => {
          this.state.externalTrigger === true &&
            this.setState({
              externalTrigger: undefined
            });
        }, 3000000)} */}
        <SiteInfo></SiteInfo>
      </Wrapper>
    );
  }
}

export default GameInfo;
