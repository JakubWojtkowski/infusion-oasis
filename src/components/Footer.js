import React from "react";
import styled from "styled-components";
import { ReactComponent as Wave } from "../assets/images/wave.svg";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Send,
} from "@mui/icons-material";

function Footer() {
  return (
    <Container>
      <Wave />
      <Wrapper>
        <Main>
          <LeftMain>
            <Heading>Company</Heading>
            <Item>About Us</Item>
            <Item>Partners</Item>
            <Item>Contact Us</Item>
            <Item>Customer Stories</Item>
          </LeftMain>

          <CenterMain>
            <Heading>
              Sign Up For <br /> The Newsletter
            </Heading>
            <Input type="email" placeholder="Enter your email..." />
            <Button type="submit">
              <span>Send</span>
              <Send />
            </Button>
          </CenterMain>

          <RightMain>
            <Heading>Find Us</Heading>
            <Items>
              <Item>
                <LinkedIn />
              </Item>
              <Item>
                <Instagram />
              </Item>
              <Item>
                <Facebook />
              </Item>
            </Items>
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
  grid-gap: 24px;
  padding: 12px 24px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 375px) {
    grid-template-columns: 1fr;
  }
`;

const LeftMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Heading = styled.h4`
  text-align: center;
`;

const Items = styled.div`
  display: flex;
  gap: 24px;
`;

const CenterMain = styled(LeftMain)`
  font-size: 1.25rem;
  position: relative;
`;

const RightMain = styled(LeftMain)`
  @media only screen and (max-width: 768px) {
    grid-column: 1 / span 3;
  }

  @media only screen and (max-width: 375px) {
    grid-column: 1;
  }
`;

const Item = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-size: clamp(0.85rem, 2.5vw, 1rem);
  text-align: center;
  transition: all 250ms ease-in-out;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const Input = styled.input`
  border-radius: 24px;
  padding: 8px 64px 8px 32px;
  height: 48px;
  width: 224px;
  background: rgba(255, 255, 255, 0.9);
  color: #202020;
  letter-spacing: 0.5px;
  border: none;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #abc270;
  border: none;
  position: absolute;
  bottom: 0px;
  right: -1px;
  height: 48px;
  width: 48px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: width 250ms ease-in-out;
  color: rgba(255, 255, 255, 0.9);

  span {
    display: none;
  }

  &:hover {
    width: 224px;
    right: 0;

    span {
      display: block;
    }
  }
`;

const Copyright = styled.span`
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 24px;
  justify-content: center;

  .MuiSvgIcon-root {
    color: rgba(255, 255, 255, 0.9) !important;
    font-size: 14px;
    transition: all 250ms ease-in-out;

    &:hover {
      color: rgba(255, 255, 255, 0.7) !important;
    }
  }
`;
