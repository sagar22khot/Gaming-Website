import styled from "styled-components";

const ImageBackground = styled.div`
  background-image: url(${props => props.imageBackground});
  background-color: #cccccc;
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export { ImageBackground };
