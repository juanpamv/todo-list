import styled from "styled-components";
import { colors } from "../../utils/variables";

export const StyledItem = styled.div`
  align-items: center;
  background-color: ${colors.gray};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;

  .remove {
    padding: 0 10px;
  }
`;
