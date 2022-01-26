import React, { useState, useContext } from "react";
import styled from "styled-components";
import { colors } from "../../utils/variables";
import Title from "../title/Title";
import { TasksContext } from "../../App";

const StyledForm = styled.div`
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

const AddForm = () => {
  const [value, setValue] = useState("");
  const { addTask } = useContext(TasksContext);

  const handleChange = (e) => {
    const text = e.target.value;
    setValue(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ task: value, done: false });
    setValue("");
  };

  return (
    <StyledForm>
      <Title>Add Pending Tasks</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Add your task"
            className="input"
          />
        </div>
        <div>
          <input className="button" type="submit" value="Add Task" />
        </div>
      </form>
    </StyledForm>
  );
};

export default AddForm;
