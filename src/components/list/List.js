import React from "react";
import PropTypes from "prop-types";

import ListItem from "../listItem/ListItem";
import Title from "../title/Title";
import { StyledList } from "./styles";

const List = ({ tasks, onClick, title, remove }) => {
  return (
    <StyledList>
      <Title>{title}</Title>
      {tasks.map((task) => (
        <ListItem
          task={task}
          onClick={onClick}
          onRemove={remove}
          key={task.id}
        />
      ))}
    </StyledList>
  );
};

List.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      done: PropTypes.bool,
      id: PropTypes.string,
      task: PropTypes.string,
    })
  ).isRequired,
  onClick: PropTypes.func,
  remove: PropTypes.func,
  title: PropTypes.string,
};

List.defaultProps = {
  onClick: null,
  remove: null,
  title: "Title",
};

export default List;
