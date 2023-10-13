import React from "react";
import styled from "styled-components";
import matcha from "../assets/images/mockup5.png";
import { AddShoppingCartOutlined } from "@mui/icons-material";

function Item() {
  return (
    <Container>
      <ItemWrapper>
        <ItemImage>
          <img src={matcha} alt="" />
        </ItemImage>
        <ItemText>
          <ItemName>Best Tea</ItemName>
          <ItemDesc>
            Short desc...adfafsfsfji jgnas gopk can lremas oipsuem aojgb weimmx
            ljgj.
          </ItemDesc>
          <ItemPrice>$4.19</ItemPrice>
          <Button>
            Add
            <AddShoppingCartOutlined />
          </Button>
        </ItemText>
      </ItemWrapper>
    </Container>
  );
}

export default Item;

const Container = styled.div``;

const ItemWrapper = styled.div`
  padding: 8px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 5px;
  border-radius: 16px;
`;

const ItemImage = styled.div`
  img {
    border-radius: 8px;
    width: 100%;
    max-height: 420px;
    object-fit: cover;
  }

  @media only screen and (max-width: 1024px) {
    img {
      max-height: 360px;
    }
  }

  @media only screen and (max-width: 425px) {
    img {
      max-height: 200px;
    }
  }
`;

const ItemText = styled.div``;

const ItemName = styled.h4``;

const ItemDesc = styled.p`
  opacity: 0.85;
`;

const ItemPrice = styled.span`
`;

const Button = styled.button`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
  height: 40px;
  cursor: pointer;
  background: #473c33;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.5px;
  font-weight: bold;
  padding: 8px 16px;
  width: 100px;
  border: 1px solid #473c33;
  border-radius: 24px;
  transition: all 250ms ease-in-out;
  margin: 16px 0 0 auto;

  &:hover {
    opacity: 0.9;
  }
`;
