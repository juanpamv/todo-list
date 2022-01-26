import React from "react";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";

import { StyledItem } from "./styles";

const ListItem = ({ task, onClick, onRemove }) => {
  const { label, done, id } = task;

  /* 
    this onClick and onRemove forms can be called in this way directly on the element
    () => onClick(id);
  */
  const handleClick = () => {
    onClick(id);
  };

  const handleremove = () => {
    onRemove(id);
  };
  return (
    <StyledItem>
      <div className="label">
        <Checkbox checked={done} onClick={handleClick} />
        {label}
      </div>
      <div className="remove" onClick={handleremove}>
        <DeleteIcon />
      </div>
    </StyledItem>
  );
};

ListItem.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      done: PropTypes.bool,
      id: PropTypes.string,
      task: PropTypes.string,
    })
  ).isRequired,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,
};

ListItem.defaultProps = {
  onClick: null,
};

export default ListItem;
