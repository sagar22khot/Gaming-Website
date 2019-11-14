import styled from "styled-components";

const BurgerWrapper = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid white;
  position: absolute;
  top: 0%;
  left: 0%;
  display: ${props => props.displayToggle === false && "none"};
`;

const BurgerLines = styled.div`
  width: 60%;
  border: 1px solid white;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const LineWrap = styled.div`
  width: 100%;
  height: 33.33%;
  position: ${props =>
    props.cross !== "neutral" && props.toggle === 1 && "absolute"};
  top: 50%;
  transform: translateY(-50%)
    rotate(
      ${props =>
        props.toggle === 1 ? (props.cross === true ? "45deg" : "315deg") : ""}
    );
  display: ${props =>
    props.toggle === 1 && props.cross === "neutral" && "none"};
`;
const SeconndaryWrap = styled.div`
  height: 60%;
  width: 100%;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export { BurgerWrapper, BurgerLines, LineWrap, SeconndaryWrap };
