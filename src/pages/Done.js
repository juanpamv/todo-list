import React, { useContext } from "react";

import List from "../components/list/List";
import { TasksContext } from "../App";

const Done = () => {
  const { tasks, setToDone, remove } = useContext(TasksContext);

  // filter the list of tasks to only show done true values
  const list = tasks.filter((task) => task.done);

  return (
    <div>
      {list.length > 0 ? (
        <List
          tasks={list}
          onClick={setToDone}
          title="Completed Tasks"
          remove={remove}
        />
      ) : (
        <p>No Tasks completed</p>
      )}
    </div>
  );
};

export default Done;
