import React, { useContext } from "react";
import AddForm from "../components/addForm/AddForm";
import List from "../components/list/List";
import { TasksContext } from "../App";

const TodoList = () => {
  const { tasks, setToDone, remove } = useContext(TasksContext);

  // filter the list of tasks to only show done false values
  const list = tasks.filter((task) => !task.done);

  return (
    <div>
      <AddForm />
      {list.length > 0 ? (
        <List
          onClick={setToDone}
          remove={remove}
          tasks={list}
          title="Todo List"
        />
      ) : (
        <p>You can go for a beer, no pending tasks</p>
      )}
    </div>
  );
};

export default TodoList;
