import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../assets/images/logo.png";
import { Close, ShoppingBagOutlined } from "@mui/icons-material";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    isOpen === true
      ? (document.body.style.overflowY = "")
      : (document.body.style.overflowY = "hidden");
    setIsOpen((current) => !current);
  };

  return (
    <Container>
      <Navbar>
        <Logo>
          <Image src={logo} alt={"logo"} />
        </Logo>

        <NavbarRight>
          <CartBtn>
            Cart <ShoppingBagOutlined />
          </CartBtn>

          <HamburgerMenu onClick={toggleMenu}>
            <Bar />
            <Bar />
            <Bar />
          </HamburgerMenu>

          {isOpen && (
            <Menu>
              <Close onClick={toggleMenu} />
              <MenuItems>
                <MenuItem onClick={toggleMenu}>Products</MenuItem>
                <MenuItem onClick={toggleMenu}>About Us</MenuItem>
                <MenuItem onClick={toggleMenu}>Contact</MenuItem>
              </MenuItems>
            </Menu>
          )}
        </NavbarRight>
      </Navbar>
    </Container>
  );
}

export default Nav;

const fadeIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Container = styled.header`
  background: #ede9d5;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #111;
  letter-spacing: 0.25px;
  max-width: 1200px;
  width: 90vw;
  margin: 0 auto;
  height: 86px;
`;

const NavbarRight = styled.div`
  display: flex;
  gap: 32px;
  justify-content: flex-end;
  align-items: center;
  flex: 0.4;
`;

const Logo = styled.div`
  padding-top: 16px;
  width: 96px;
  height: 100px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 4px;
  width: 40px;
  height: 40px;
  cursor: pointer;

  div:nth-child(1) {
    width: 24px;
  }
  div:nth-child(2) {
    width: 36px;
  }

  &:hover {
    div:nth-child(1) {
      width: 32px;
    }

    div:nth-child(2) {
      width: 24px;
    }

    div:nth-child(3) {
      width: 36px;
    }
  }
`;

const Bar = styled.div`
  width: 32px;
  background: #473c33;
  height: 4px;
  transition: all 250ms ease-in-out;
  border-radius: 4px;
`;

const CartBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  cursor: pointer;
  gap: 4px;
  width: 100px;
  background: #473c33;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 0.5px;
  font-weight: bold;
  padding: 8px 16px;
  border: 1px solid #473c33;
  border-radius: 24px;
  transition: all 250ms ease-in-out;

  .MuiSvgIcon-root {
    font-size: 20px !important;
    color: rgba(255, 255, 255, 0.9);
  }

  &:hover {
    opacity: 0.9;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background: #ede9d5;
  right: 0;
  width: 320px;
  z-index: 11;
  min-height: 100vh;
  font-size: 24px;
  animation: ${fadeIn} 350ms ease-in-out;

  .MuiSvgIcon-root {
    position: absolute;
    cursor: pointer;
    top: 0;
    right: 0;
    margin: 32px;
    font-size: 32px !important;
    transition: all 350ms ease-in-out;

    &:hover {
      rotate: 180deg;
    }
  }

  @media only screen and (max-width: 425px) {
    width: 60%;
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 64px;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const MenuItem = styled.li`
  cursor: pointer;
  position: relative;
  color: #473c33;

  &::after {
    content: "";
    position: absolute;
    background: #473c33;
    height: 3px;
    border-radius: 8px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.5s;
  }

  &:hover:after {
    width: 100%;
  }
`;
