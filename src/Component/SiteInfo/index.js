import React, { Component } from "react";
import { Wrapper, Contact, Details, CopyRight } from "./styled";

export class SiteInfo extends Component {
  render() {
    return (
      <Wrapper>
        <Contact>
          <CopyRight>
            Copyright © 2019 North Carolina, USA. All rights reserved.
          </CopyRight>
          <Details>(585)-503-9240</Details>
          <Details>snk5194@rit.edu</Details>
        </Contact>
      </Wrapper>
    );
  }
}

export default SiteInfo;
