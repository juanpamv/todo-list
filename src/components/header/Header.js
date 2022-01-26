import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { StyledHeader } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <div className="row">
          <Link to="/" className="logo">
            <Typography variant="h1">Todo List</Typography>
          </Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/done">Done</Link>
          </nav>
        </div>
      </Container>
    </StyledHeader>
  );
};

export default Header;
