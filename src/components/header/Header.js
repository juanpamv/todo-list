import React from "react";
import styled from "styled-components";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

import { colors } from "../../utils/variables";

const StyledHeader = styled.header`
  background-color: ${colors.blue};
  padding: 15px 0px;

  .logo {
    text-decoration: none;
  }

  h1 {
    font-size: 25px;
    font-weight: bold;
  }

  .row {
    flex-direction: row;
    display: flex;
    justify-content: space-between;
  }

  nav {
    display: flex;
    align-items: center;

    a {
      color: ${colors.white};
      padding: 0px 20px;
    }
  }
`;

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
