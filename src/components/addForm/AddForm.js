import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import Title from "../title/Title";
import { TasksContext } from "../../App";
import { StyledForm } from "./styles";
import Button from "../button/Button";

const AddForm = () => {
  const [value, setValue] = useState("");
  const { addTask } = useContext(TasksContext);

  const handleChange = (e) => {
    // get input value
    const text = e.target.value;
    setValue(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // prevent null values to be added
    if (value !== "") {
      // uuid added to create unique ids to be used as id for the element array
      addTask({ label: value, done: false, id: uuidv4() });
      // clear the input value
      setValue("");
    }
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
          <Button type="submit" disabled={value === ""}>
            Add Task
          </Button>
        </div>
      </form>
    </StyledForm>
  );
};

export default AddForm;
