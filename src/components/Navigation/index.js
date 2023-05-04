import React from "react";
import { ListItem, List } from "../Navigation/style";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <List>
      <Link to="/">
        <ListItem>Users</ListItem>
      </Link>
      <Link to="/bookmark">
        <ListItem>Favorits</ListItem>
      </Link>
    </List>
  );
}

export default NavBar;
