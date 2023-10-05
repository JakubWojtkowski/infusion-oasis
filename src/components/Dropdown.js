import React from "react";
import styled from "styled-components";

function Dropdown() {
  return (
    <Container>
      <List>
        <ListItem>About</ListItem>
        <ListItem>Shop</ListItem>
        <ListItem>Contact</ListItem>
      </List>
    </Container>
  );
}

export default Dropdown;

const Container = styled.div``;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
  text-transform: uppercase;
  list-style: none;
  display: none;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;
