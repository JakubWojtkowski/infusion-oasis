import React from "react";
import styled from "styled-components";
import matcha from "../assets/images/mockup5.png";

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
          <Item>
            <img src={matcha} alt=""></img>
          </Item>
          <Item>
            <img src={matcha} alt=""></img>
          </Item>
          <Item>
            <img src={matcha} alt=""></img>
          </Item>
          <Item>
            <img src={matcha} alt=""></img>
          </Item>
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
  margin-bottom: 64px;
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

const MainContent = styled.div`
  display: flex;
  gap: 24px;
`;

const Item = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  border: 1px solid green;

  img {
    width: 100%;
    height: 28vh;
    object-fit: cover;
  }
`;
