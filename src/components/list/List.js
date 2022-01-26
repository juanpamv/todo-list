import React from "react";
import styled from "styled-components";

import ListItem from "../listItem/ListItem";
import Title from "../title/Title";

const StyledList = styled.div`
  padding: 20px 0;
`;

const List = ({ tasks, onClick, title }) => {
  return (
    <StyledList>
      <Title>{title}</Title>
      {tasks.map((task) => (
        <ListItem task={task} onClick={onClick} />
      ))}
    </StyledList>
  );
};

export default List;
