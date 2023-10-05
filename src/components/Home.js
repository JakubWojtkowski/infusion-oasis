import React from "react";
import styled from "styled-components";
import background from "../assets/images/background.png";
import Nav from "./Nav";

function Home() {
  return (
    <Container>
      <Wrapper>
        <Nav />
        <Image
          src="https://cdn4.iconfinder.com/data/icons/electronics-24/100/Artboard_1_Copy_101-512.png"
          alt=""
        />
      </Wrapper>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    background: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 90vw;
  margin: 0 auto;
  height: 100%;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  width: 8vw;
  margin: 0 auto;
  animation: bounce 5s ease-in-out infinite alternate;
  opacity: 0.75;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-7px);
    }
    60% {
      transform: translateY(-3.5px);
    }
  }
`;
