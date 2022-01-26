import React, { useContext } from "react";
import styled from "styled-components";

import List from "../components/list/List";
import { colors } from "../utils/variables";
import { TasksContext } from "../App";

const StyledDone = styled.div`
  .button {
    background-color: ${colors.blue};
    border: none;
    color: ${colors.white};
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
  }

  p {
    padding: 20px 0;
  }
`;

const Done = () => {
  const { tasks, setToDone, clearTasks } = useContext(TasksContext);

  const list = tasks.filter((task) => task.done);

  return (
    <StyledDone>
      {list.length > 0 ? (
        <>
          <List tasks={list} onClick={setToDone} title="Completed Tasks" />
          <button className="button" onClick={clearTasks}>
            Remove all tasks
          </button>
        </>
      ) : (
        <p>No Tasks completed</p>
      )}
    </StyledDone>
  );
};

export default Done;
