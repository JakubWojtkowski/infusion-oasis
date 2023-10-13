import React from "react";
import styled from "styled-components";
import Item from "./Item";

function Products() {
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
              <Item />
              <Item />
              <Item />
            </Items>
          </Slider>
        </MainContent>
      </Main>
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
