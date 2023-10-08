import React from "react";
import styled from "styled-components";
import about from "../assets/images/about.png";

function About() {
  return (
    <Container>
      <Heading>Why Infusion Oasis?</Heading>
      <Main>
        <ImageContainer>
          <Image src={about} alt="about" />
          <OverlayText>
            timelessness. minimalism. experience. quality.{" "}
          </OverlayText>
        </ImageContainer>
      </Main>
    </Container>
  );
}

export default About;

const Container = styled.div`
  padding: 64px 0;
`;

const Heading = styled.h2`
  margin-bottom: 64px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 450px;
  height: auto;
  object-fit: cover;
  z-index: 1;

  @media only screen and (max-width: 768px) {
    width: 340px;
  }

  @media only screen and (max-width: 425px) {
    width: 230px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-top: 64px;
`;

const OverlayText = styled.span`
  position: absolute;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
  font-size: 76px;
  letter-spacing: 1px;
  top: -132px;
  left: 8px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
    top: -104px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 48px;
    top: -82px;
  }

  @media only screen and (max-width: 425px) {
    font-size: 36px;
    top: -62px;
  }
`;
