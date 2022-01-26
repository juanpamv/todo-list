import styled from "styled-components";
import { colors } from "../../utils/variables";

export const StyledButton = styled.button`
  background-color: ${colors.blue};
  border: none;
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;

  &:disabled {
    background-color: ${colors.lightBlue};
  }
`;
