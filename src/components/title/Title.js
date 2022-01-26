import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/variables";

const StyledTitle = styled.div`
  h2 {
    color: ${colors.blue};
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 20px;
  }
`;

const Title = ({ children }) => {
  return (
    <StyledTitle>
      <h2>{children}</h2>
    </StyledTitle>
  );
};

export default Title;
