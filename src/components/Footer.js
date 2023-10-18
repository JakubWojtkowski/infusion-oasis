import React from "react";
import styled from "styled-components";
import { ReactComponent as Wave } from "../assets/images/wave.svg";

function Footer() {
  return (
    <Container>
      {/* <Wave /> */}
      <Wrapper>
        <LeftMain>1</LeftMain>
        <CenterMain>2</CenterMain>
        <RightMain>3</RightMain>
      </Wrapper>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background: #473c33;
  color: rgba(255, 255, 255, 0.9);
  height: 180px;

  svg {
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const LeftMain = styled.div``;

const CenterMain = styled(LeftMain)``;

const RightMain = styled(LeftMain)``;
