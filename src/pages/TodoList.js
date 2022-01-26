import React, { useContext } from "react";
import AddForm from "../components/addForm/AddForm";
import List from "../components/list/List";
import { TasksContext } from "../App";

const TodoList = () => {
  const { tasks, setToDone } = useContext(TasksContext);

  const list = tasks.filter((task) => !task.done);

  return (
    <div>
      <AddForm />
      {list.length > 0 ? (
        <List tasks={list} onClick={setToDone} title="Todo List" />
      ) : (
        <p>You can go for a beer, no pending tasks</p>
      )}
    </div>
  );
};

export default TodoList;
