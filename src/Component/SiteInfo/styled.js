import styled from "styled-components";

const Wrapper = styled.div`
  height: 60px;
  width: 100vw;
  background-color: black;
  position: relative;
  // bottom: 0%;
  // opacity: 70%;
`;

const Contact = styled.div`
  width: 50%;
  height: 70%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  // display: inline-block;
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;

const Details = styled.h3`
  font-size: 8px;
  color: white;
  text-align: center;
  // display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const CopyRight = styled.h3`
  text-align: center;
  // height: 100%;
  font-size: 8px;
  color: white;
  // display: inline-block;
`;

export { Wrapper, Contact, Details, CopyRight };
