import React from "react";
import styled from "styled-components";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import Fade from "react-reveal/Fade";

function Item({ tea }) {
  return (
    <Container>
      <Fade bottom>
        <ItemWrapper>
          <ItemImage>
            <img src={`/images/items/${tea.image}.png`} alt="tea" />
          </ItemImage>
          <ItemText>
            <ItemName>{tea.name}</ItemName>
            <ItemDesc>{tea.description}</ItemDesc>
            <ItemPrice>${tea.price}</ItemPrice>
            <Button>
              Add To Cart
              <AddShoppingCartOutlined />
            </Button>
          </ItemText>
        </ItemWrapper>
      </Fade>
    </Container>
  );
}

export default Item;

const Container = styled.div``;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 3px 5px;
  border-radius: 16px;
`;

const ItemImage = styled.div`
  img {
    border-radius: 8px;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  @media only screen and (max-width: 1024px) {
    img {
      max-height: 340px;
    }
  }

  @media only screen and (max-width: 600px) {
    img {
      max-height: 240px;
    }
  }

  @media only screen and (max-width: 425px) {
    img {
      max-height: 190px;
    }
  }
`;

const ItemText = styled.div``;

const ItemName = styled.h4``;

const ItemDesc = styled.p`
  opacity: 0.85;
  line-height: 1.5;
`;

const ItemPrice = styled.span`
  font-weight: bold;
`;

const Button = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 40px;
  cursor: pointer;
  background: #473c33;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.5px;
  font-weight: bold;
  padding: 8px 16px;
  border: 1px solid #473c33;
  border-radius: 24px;
  transition: all 250ms ease-in-out;
  margin: 12px 4px;

  &:hover {
    opacity: 0.9;
  }

  .MuiSvgIcon-root {
    font-size: 20px !important;
  }

  @media only screen and (max-width: 425px) {
    font-size: 10px;
  }

  .MuiSvgIcon-root {
    font-size: 16px !important;
  }
`;
