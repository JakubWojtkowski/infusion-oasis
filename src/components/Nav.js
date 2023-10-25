import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

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

          {isOpen && <DropdownMenu toggleMenu={toggleMenu} />}
        </NavbarRight>
      </Navbar>
    </Container>
  );
}

export default Nav;

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
  z-index: 1;
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
