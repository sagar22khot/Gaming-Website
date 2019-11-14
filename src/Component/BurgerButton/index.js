import React, { Component } from "react";
import { BurgerWrapper, BurgerLines, LineWrap, SeconndaryWrap } from "./styled";

export class BurgerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: 0
    };
  }
  render() {
    return (
      <BurgerWrapper
        displayToggle={this.props.displayToggle}
        onClick={() => (
          this.setState({ toggle: this.state.toggle === 0 ? 1 : 0 }),
          this.props.extraFunctionality()
        )}>
        {this.props.externalTrigger === true &&
          this.state.toggle === 1 &&
          this.setState({ toggle: 0 })}
        <SeconndaryWrap>
          <LineWrap
            toggle={
              this.props.externalTrigger
                ? this.props.externalTrigger
                : this.state.toggle
            }
            cross={true}>
            <BurgerLines></BurgerLines>
          </LineWrap>
          <LineWrap
            toggle={
              this.props.externalTrigger
                ? this.props.externalTrigger
                : this.state.toggle
            }
            cross="neutral">
            <BurgerLines></BurgerLines>
          </LineWrap>
          <LineWrap
            toggle={
              this.props.externalTrigger
                ? this.props.externalTrigger
                : this.state.toggle
            }
            cross={false}>
            <BurgerLines></BurgerLines>
          </LineWrap>
        </SeconndaryWrap>
      </BurgerWrapper>
    );
  }
}

export default BurgerButton;
