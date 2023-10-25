import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectTea } from "../features/tea/teaSlice";
import Item from "./Item";
import MovingText from "./MovingText";

function Products() {
  const tea = useSelector(selectTea);

  return (
    <Container>
      <Heading>Our Products</Heading>
      <Main>
        <Text>
          <CategoryName>Tea</CategoryName>
          <CategoryName>Accessory</CategoryName>
        </Text>
        <MainContent>
          <Slider>
            <Items>
              {tea?.map((tea, index) => {
                return <Item key={index} tea={tea} />;
              })}
            </Items>
          </Slider>
        </MainContent>
      </Main>
      <MovingText />
    </Container>
  );
}

export default Products;

const Container = styled.div`
  padding: 64px 0;
`;

const Heading = styled.h2`
  margin-bottom: 48px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  position: relative;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
`;

const CategoryName = styled.h3`
  cursor: pointer;

  &:nth-child(2) {
    opacity: 0.5;
  }
`;

const MainContent = styled.div``;

const Slider = styled.div``;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 32px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;
