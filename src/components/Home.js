import React from "react";
import styled from "styled-components";
import Intro from "./Intro";
import About from "./About";
import Products from "./Products";

function Home() {
  return (
    <Container>
      <Wrapper>
        <Intro />
        <Products />
        <About />
      </Wrapper>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  background: #ede9d5;
  position: relative;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 90vw;
  margin: 0 auto;
`;
