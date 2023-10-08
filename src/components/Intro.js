import React from "react";
import styled from "styled-components";
import intro from "../assets/images/intro.png";

function Intro() {
  return (
    <Container>
      <Wrapper>
        <Main>
          <Text>
            <Heading>
              "Experience the Tranquility <br></br>of Japanese Tea"
              <Blob />
              <SubHeading>From Tree to Teapot</SubHeading>
            </Heading>
            <TextBottom>
              <Description>
                Immerse yourself in the rich heritage of
                <strong> Japanese </strong>tea, where every cup tells a story of
                <strong> meticulous </strong>
                craftsmanship and centuries-old<strong> traditions</strong>.
                Explore the exquisite flavors and <strong>healthful </strong>
                qualities of our curated selection, ranging from the vibrant
                notes of matcha to the soothing nuances of sencha and beyond.
              </Description>

              <Button>Shop Now</Button>
            </TextBottom>
          </Text>

          <ImageContent src={intro} alt="intro-image" />
        </Main>
      </Wrapper>
    </Container>
  );
}

export default Intro;

const Container = styled.div`
  padding: 32px 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
`;

const Text = styled.div`
  position: relative;
  z-index: 1;
`;

const Blob = styled.div`
  position: absolute;
  background: #abc270;
  width: 400px;
  height: 112px;
  top: 0px;
  left: 0px;
  z-index: -1;
  animation: animate 2.5s infinite ease-in-out;

  @keyframes animate {
    0% {
      border-radius: 20% 20% 30% 70%/60% 40% 60% 40%;
    }

    50% {
      border-radius: 30% 40% 70% 40%/50% 40% 50% 60%;
    }

    100% {
      border-radius: 20% 20% 30% 70%/60% 40% 60% 40%;
    }
  }

  @media only screen and (max-width: 1024px) {
    width: 280px;
    height: 112px;
  }

  @media only screen and (max-width: 768px) {
    width: 368px;
    height: 72px;
    top: 0px;
  }

  @media only screen and (max-width: 425px) {
    width: 232px;
    height: 104px;
    top: 6px;
  }
`;

const Heading = styled.h1`
  letter-spacing: 0.5px;
  font-size: clamp(1.85rem, 3.5vw, 2.75rem);
  margin-bottom: 48px;
  position: relative;
`;

const SubHeading = styled.p`
  font-size: clamp(1.75rem, 3.5vw, 2rem);
  opacity: 0.5;
  z-index: 1;
`;

const TextBottom = styled.div`
  width: 77.5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Description = styled.p`
  opacity: 0.85;
  letter-spacing: 0.25px;
  line-height: 2;
  font-size: clamp(1.05rem, 3.5vw, 1.1rem);
  text-align: justify;
  margin-bottom: 36px;
  z-index: 20;

  @media only screen and (max-width: 768px) {
    font-size: clamp(1rem, 3.5vw, 1.2rem);
  }
`;

const Button = styled.button`
  height: 40px;
  cursor: pointer;
  background: #473c33;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.5px;
  font-weight: bold;
  padding: 8px 16px;
  width: 160px;
  border: 1px solid #473c33;
  border-radius: 24px;
  transition: all 250ms ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;

const ImageContent = styled.img`
  border-radius: 30% 40% 30% 40%/60% 30% 70% 40%;
  height: 70vh;
  width: 100%;
  object-fit: cover;
  scale: 0.75;
`;
