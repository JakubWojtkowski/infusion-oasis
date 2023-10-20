import { Close } from "@mui/icons-material";
import React from "react";
import styled, { keyframes } from "styled-components";

function DropdownMenu(props) {
  return (
    <Menu>
      <Close onClick={props.toggleMenu} />
      <MenuItems>
        <MenuItem onClick={props.toggleMenu}>Products</MenuItem>
        <MenuItem onClick={props.toggleMenu}>About Us</MenuItem>
        <MenuItem onClick={props.toggleMenu}>Contact</MenuItem>
      </MenuItems>
    </Menu>
  );
}

export default DropdownMenu;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
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
