import React from "react";
import styled from "styled-components";
import { ReactComponent as SliderSvg } from "../assets/images/slider.svg";
import { ReactComponent as SliderSvg1 } from "../assets/images/slider1.svg";
import { ReactComponent as SliderSvg2 } from "../assets/images/slider2.svg";
import { ReactComponent as SliderSvg3 } from "../assets/images/slider3.svg";
import { ReactComponent as SliderSvg4 } from "../assets/images/slider4.svg";
import Marquee from "react-fast-marquee";

function MovingText() {
  return (
    <Container>
      <Marquee autoFill={true}>
        <SliderSvg />.
        <SliderSvg1 />.
        <SliderSvg2 />.
        <SliderSvg3 />.
        <SliderSvg4 />.
      </Marquee>
    </Container>
  );
}

export default MovingText;

const Container = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  margin-top: 64px;
  padding: 0 16px;
  font-size: 24px;
`;
