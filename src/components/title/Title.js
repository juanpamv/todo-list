import React from "react";

import { StyledTitle } from "./styles";

const Title = ({ children }) => {
  return (
    <StyledTitle>
      <h2>{children}</h2>
    </StyledTitle>
  );
};

export default Title;
