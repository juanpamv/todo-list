import React from "react";
import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";
import { colors } from "../../utils/variables";

const StyledItem = styled.div`
  background-color: ${colors.gray};
  margin-bottom: 10px;
`;

const ListItem = ({ task, onClick }) => {
  const handleClick = () => {
    onClick(task);
  };
  return (
    <StyledItem onClick={handleClick}>
      <Checkbox checked={task.done} />
      {task.task}
    </StyledItem>
  );
};

export default ListItem;
