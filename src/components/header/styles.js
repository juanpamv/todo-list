import styled from "styled-components";
import { colors } from "../../utils/variables";

export const StyledHeader = styled.header`
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
