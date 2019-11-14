import React, { Component } from "react";
import {
  Wrapper,
  SlideWindow,
  SliderData,
  SliderDataWrapper,
  Content,
  RightArrow,
  LeftArrow,
  HiddenDetails
} from "./styled";
import back from "../../Assets/back.png";
import forward from "../../Assets/forward.png";
import more from "../../Assets/more.png";
import dyinglight2 from "../../Assets/dyinglight2.jpg";
import nfs from "../../Assets/nfs.jpg";
import legion from "../../Assets/legion.jpg";
import cyberpunk from "../../Assets/cyberpunk.jpg";
import haloInfinite from "../../Assets/haloInfinite.png";
import DoomEternal from "../../Assets/DoomEternal.png";
import DeathStranding from "../../Assets/DeathStranding.jpg";

const data = [
  { title: "Coming Soon", image: more },
  { title: "Halo Infinite", image: haloInfinite },
  { title: "NFS Heat", image: nfs },
  { title: "Dying Light 2", image: dyinglight2 },
  { title: "Watch Dogs: Legion", image: legion },
  { title: "Cyber Punk 2077", image: cyberpunk },
  { title: "Death Stranding", image: DeathStranding },
  { title: "Doom Eternal", image: DoomEternal },
  { title: "Coming Soon", image: more }
];

export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCardPosition: -720,
      selectedSlide: 4,
      hiddenDivToggle: false
    };
    this.slideWidth = 240;
  }

  toggleSlide = direction => {
    this.setState({
      currentCardPosition:
        direction === 1
          ? this.state.currentCardPosition - this.slideWidth
          : this.state.currentCardPosition + this.slideWidth,
      selectedSlide:
        direction === 1
          ? this.state.selectedSlide + 1
          : this.state.selectedSlide - 1
    });
  };

  render() {
    return (
      <Wrapper>
        <LeftArrow
          arrow="left"
          onClick={() => {
            this.toggleSlide(0);
          }}
          maxSlide={1}
          currentCardPosition={this.state.currentCardPosition}
          slideWidth={this.slideWidth}
          arrowImg={back}></LeftArrow>
        <SlideWindow>
          <SliderDataWrapper
            currentCardPosition={this.state.currentCardPosition}>
            {data.map((q, i) => (
              <SliderData
                onMouseEnter={() => {
                  i === this.state.selectedSlide &&
                    this.setState({
                      hiddenDivToggle: true
                    });
                }}
                onMouseLeave={() => {
                  this.setState({
                    hiddenDivToggle: false
                  });
                }}>
                <Content
                  selected={i === this.state.selectedSlide ? true : false}
                  featureImage={q.image}></Content>
                {i === this.state.selectedSlide && (
                  <HiddenDetails hiddenDivToggle={this.state.hiddenDivToggle}>
                    {q.title}
                  </HiddenDetails>
                )}
              </SliderData>
            ))}
          </SliderDataWrapper>
        </SlideWindow>
        <RightArrow
          arrow="right"
          onClick={() => {
            this.toggleSlide(1);
          }}
          minSlide={data.length - 3}
          currentCardPosition={this.state.currentCardPosition}
          slideWidth={this.slideWidth}
          arrowImg={forward}></RightArrow>
      </Wrapper>
    );
  }
}

export default Carousel;
