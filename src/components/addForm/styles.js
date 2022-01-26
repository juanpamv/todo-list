import styled from "styled-components";
import { colors } from "../../utils/variables";

export const StyledForm = styled.div`
  padding: 20px 0;
  border-bottom: 2px solid ${colors.gray};
  margin-bottom: 20px;

  div {
    display: flex;
  }

  .input {
    border: 1px solid ${colors.blue};
    display: flex;
    font-size: 18px;
    margin-bottom: 20px;
    padding: 10px 10px;
    width: 100%;
  }

  .button {
    background-color: ${colors.blue};
    border: none;
    color: ${colors.white};
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
  }
`;
