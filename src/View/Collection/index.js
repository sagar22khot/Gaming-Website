import React from "react";
import { Redirect, Link } from "react-router-dom";
import wallpaperMain from "../../Assets/collection.jpg";
import { Background } from "../../Component/Background";
import { BurgerButton } from "../../Component/BurgerButton";
import leftlist from "../../Assets/leftlist.png";
import rightlist from "../../Assets/rightlist.png";
import {
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
} from "./styled";
const axios = require("axios");

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameCollection: null,
      currentPage: 1,
      flipCard: false,
      selectedCard: null
    };
  }

  componentDidMount() {
    this.getallGames().then(response => {
      this.setState(
        {
          gameCollection: response.results
        },
        () => {
          console.log("Data: ", this.state.gameCollection);
        }
      );
    });
  }

  onSubmit = () => {
    this.props.history.push("/");
  };

  getallGames = () => {
    const url =
      `https://api.rawg.io/api/games?page_size=10&page=` +
      this.state.currentPage;

    return axios.get(url).then(response => response.data);
  };

  render() {
    return (
      <Wrapper>
        <Background imageBackground={wallpaperMain}></Background>
        <CollectionWrapper>
          {this.state.gameCollection !== null &&
            this.state.gameCollection.map((data, i) => (
              <GameWrap>
                <Game
                  cardflip={i === this.state.selectedCard ? true : false}
                  onMouseEnter={() => {
                    this.setState({
                      flipCard: true,
                      selectedCard: i
                    });
                  }}
                  onMouseLeave={() => {
                    this.setState({
                      flipCard: false,
                      selectedCard: null
                    });
                  }}>
                  <GameWallpaper
                    imagesrc={data.background_image}></GameWallpaper>
                  <GameDetails>
                    <TempWrap>
                    <GameTitle>{data.name}</GameTitle>
                    <GameDesc>Rating: {data.rating}</GameDesc>
                    <GameDesc>Release: {data.released}</GameDesc>
                    </TempWrap>
                    
                  </GameDetails>
                  <HiddenDetails>
                    <KnowMoreLink
                      to={{
                        pathname: "/gameinfo/" + data.id
                      }}>
                      Click here to know more!
                    </KnowMoreLink>
                    {/* <GameTitle>{data.id}</GameTitle> */}
                  </HiddenDetails>
                </Game>
              </GameWrap>
            ))}
        </CollectionWrapper>
        <PreviousButton
          imageBackground={leftlist}
          visible={this.state.currentPage}
          onClick={() => {
            this.setState(
              {
                currentPage: this.state.currentPage - 1
              },
              () => {
                this.getallGames().then(response => {
                  this.setState({
                    gameCollection: response.results
                  });
                });
              }
            );
          }}></PreviousButton>
        <NextButton
          imageBackground={rightlist}
          visible={this.state.currentPage}
          onClick={() => {
            this.setState(
              {
                currentPage: this.state.currentPage + 1
              },
              () => {
                this.getallGames().then(response => {
                  this.setState({
                    gameCollection: response.results
                  });
                });
              }
            );
          }}></NextButton>
      </Wrapper>
    );
  }
}
export default Collection;
