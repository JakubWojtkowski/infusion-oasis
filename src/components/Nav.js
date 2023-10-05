import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { ShoppingBagOutlined } from "@mui/icons-material";

function Nav() {
  return (
    <Container>
      <Navbar>
        <Logo>
          <Image src={logo} alt={"logo"} />
        </Logo>

        <NavbarRight>
          <List>
            <ListItem>About</ListItem>
            <ListItem>Shop</ListItem>
            <ListItem>Contact</ListItem>
          </List>

          <CartBtn>
            CART <ShoppingBagOutlined />
          </CartBtn>

          <HamburgerMenu>
            <Bar />
            <Bar />
            <Bar />
          </HamburgerMenu>
        </NavbarRight>
      </Navbar>
    </Container>
  );
}

export default Nav;

const Container = styled.header`
  height: 70px;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #111;
  letter-spacing: 0.25px;
  padding: 8px 0;
`;

const NavbarRight = styled.div`
  display: flex;
  gap: 64px;
  justify-content: space-between;
  align-items: center;
  flex: 0.4;
`;

const Logo = styled.div`
  height: 70px;
  flex: 0.6;
`;

const Image = styled.img`
  width: 76px;
  height: 70px;
  object-fit: cover;
`;

const List = styled.ul`
  display: flex;
  gap: 32px;
  text-transform: uppercase;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 4px;
  height: 40px;
  cursor: pointer;

  div:nth-child(1) {
    width: 20px;
  }
  div:nth-child(2) {
    width: 32px;
  }

  &:hover {
    div:nth-child(1) {
      width: 28px;
      transition: all 250ms ease-in-out;
    }

    div:nth-child(2) {
      width: 20px;
      transition: all 250ms ease-in-out;
    }

    div:nth-child(3) {
      width: 32px;
      transition: all 250ms ease-in-out;
    }
  }

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  width: 28px;
  background: #111;
  height: 4px;
`;

const CartBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  cursor: pointer;
  gap: 4px;
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 16px;

  .MuiSvgIcon-root {
    font-size: 20px !important;
    color: #111;
  }

  &:hover {
    background: rgba(255, 255, 255, 1);
    transition: all 250ms ease-in-out;
  }
`;
