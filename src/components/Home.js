import React from "react";
import styled from "styled-components";
import Intro from "./Intro";

function Home() {
  return (
    <Container>
      <Wrapper>
        <Intro />
      </Wrapper>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  background: #ede9d5;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 90vw;
  margin: 0 auto;
`;

// const Image = styled.img`
//   position: absolute;
//   right: 0;
//   left: 0;
//   bottom: 0;
//   width: 8vw;
//   margin: 0 auto;
//   animation: bounce 5s ease-in-out infinite alternate;
//   opacity: 0.75;

//   @keyframes bounce {
//     0%,
//     20%,
//     50%,
//     80%,
//     100% {
//       transform: translateY(0);
//     }
//     40% {
//       transform: translateY(-7px);
//     }
//     60% {
//       transform: translateY(-3.5px);
//     }
//   }

//   @media only screen and (max-width: 1024px) {
//     width: 12vw;
//   }

//   @media only screen and (max-width: 768px) {
//     width: 16vw;
//   }

//   @media only screen and (max-width: 600px) {
//     width: 32vw;
//   }
// `;
