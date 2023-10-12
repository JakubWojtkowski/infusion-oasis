import React from "react";
import styled from "styled-components";
import matcha from "../assets/images/mockup5.png";
import { Add, AddShoppingCartOutlined } from "@mui/icons-material";

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
              <Item>
                <ItemWrapper>
                  <ItemImage>
                    <img src={matcha} alt="" />
                  </ItemImage>
                  <ItemText>
                    <h4>Best tea</h4>
                    <p>
                      Short desc...adfafsfsfji jgnas gopk can lremas oipsuem
                      aojgb weimmx ljgj.
                    </p>
                    <span>$4.19</span>
                    <Button>
                      Add
                      <AddShoppingCartOutlined />
                    </Button>
                  </ItemText>
                </ItemWrapper>
              </Item>

              <Item>
                <ItemWrapper>
                  <ItemImage>
                    <img src={matcha} alt="" />
                  </ItemImage>
                  <ItemText>
                    <h4>Best tea</h4>
                    <p>
                      Short desc...adfafsfsfji jgnas gopk can lremas oipsuem
                      aojgb weimmx ljgj.
                    </p>
                    <span>$4.19</span>
                    <Button>
                      Add
                      <AddShoppingCartOutlined />
                    </Button>
                  </ItemText>
                </ItemWrapper>
              </Item>

              <Item>
                <ItemWrapper>
                  <ItemImage>
                    <img src={matcha} alt="item" />
                  </ItemImage>
                  <ItemText>
                    <h4>Best tea</h4>
                    <p>
                      Short desc...adfafsfsfji jgnas gopk can lremas oipsuem
                      aojgb weimmx ljgj.
                    </p>
                    <span>$4.19</span>
                    <Button>
                      Add
                      <AddShoppingCartOutlined />
                    </Button>
                  </ItemText>
                </ItemWrapper>
              </Item>
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

const Item = styled.div`
  flex: 1;
`;

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
