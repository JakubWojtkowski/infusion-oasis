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
              "Experience the Tranquility of Japanese Tea"
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

          <ImageContent />
        </Main>
      </Wrapper>
    </Container>
  );
}

export default Intro;

const Container = styled.div`
  padding: 64px 0;
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
  justify-content: center;
  justify-items: center;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Text = styled.div`
  position: relative;
  z-index: 1;
`;

const Blob = styled.div`
  position: absolute;
  background: #abc270;
  width: 390px;
  height: 112px;
  top: 0px;
  left: 10px;
  z-index: -1;
  animation: animate 5s infinite ease-in-out;

  @keyframes animate {
    0% {
      border-radius: 20% 10% 40% 70%/60% 20% 80% 40%;
    }

    50% {
      border-radius: 30% 30% 70% 40%/50% 40% 50% 60%;
    }

    100% {
      border-radius: 20% 10% 40% 70%/60% 20% 80% 40%;
    }
  }
`;

const Heading = styled.h1`
  color: #473c33;
  letter-spacing: 0.5px;
  font-size: 2.75rem;
  margin-bottom: 60px;
  position: relative;
`;

const SubHeading = styled.p`
  font-size: 2rem;
  opacity: 0.5;
  z-index: 1;
`;

const TextBottom = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.p`
  color: #473c33;
  opacity: 0.85;
  letter-spacing: 0.25px;
  line-height: 2;
  font-size: 1rem;
  text-align: justify;
  margin-bottom: 40px;
  z-index: 20;
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

const ImageContent = styled.div`
  background: url(${intro});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20% 40% 30% 50%/60% 30% 70% 40%;
  height: 100%;
  width: 100%;
`;
