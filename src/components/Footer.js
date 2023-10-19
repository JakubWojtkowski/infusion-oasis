import React from "react";
import styled from "styled-components";
import { ReactComponent as Wave } from "../assets/images/wave.svg";
import { GitHub } from "@mui/icons-material";

function Footer() {
  return (
    <Container>
      {/* <Wave /> */}
      <Wrapper>
        <Main>
          <LeftMain>Infusion Oasis ...</LeftMain>
          <CenterMain>Contact us...</CenterMain>
          <RightMain>Newsletter -5%
          <input type="email" placeholder="text..."/>
          </RightMain>
        </Main>
        <Copyright>
          Copyright © Jakub Wojtkowski{" "}
          <a
            href="https://github.com/JakubWojtkowski"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub />
          </a>{" "}
          | 2023
        </Copyright>
      </Wrapper>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  background: #473c33;
  color: rgba(255, 255, 255, 0.9);
  height: 120px;

  svg {
  }
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
`;

const LeftMain = styled.div``;

const CenterMain = styled(LeftMain)``;

const RightMain = styled(LeftMain)``;

const Copyright = styled.span`
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 24px auto;
  justify-content: center;

  .MuiSvgIcon-root {
    color: rgba(255, 255, 255, 0.9) !important;
    font-size: 14px;
  }
`;
