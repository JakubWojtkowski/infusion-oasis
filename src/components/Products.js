import React from "react";
import styled from "styled-components";

function Products() {
  return (
    <Container>
      <Heading>Our Products</Heading>
      <Main>
        <CategoryName>Tea</CategoryName>
        <CategoryName>Accessories</CategoryName>
      </Main>
    </Container>
  );
}

export default Products;

const Container = styled.div`
  padding: 64px 0;
`;

const Heading = styled.h2``;

const Main = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const CategoryName = styled.h3``;
