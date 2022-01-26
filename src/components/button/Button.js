import React from "react";
import PropTypes from "prop-types";

import { StyledButton } from "./styles";

const Button = ({ children, disabled, onClick, type }) => {
  return (
    <StyledButton onClick={onClick} type={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  children: null,
  disabled: false,
  onClick: null,
  type: null,
};

export default Button;
