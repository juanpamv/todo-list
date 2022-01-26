import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import Container from "@mui/material/Container";

import Header from "./components/header/Header";
import Routes from "./Routes";
import storage from "./utils/localStorage";
import Button from "./components/button/Button";

/* 
  Context is used as a single source of truth in this app
*/

export const TasksContext = createContext();

function App() {
  const [tasks, setTasks] = useState([]);
  const { getStorage, setStorage } = storage();
  const storedTasks = getStorage("tasks");

  useEffect(() => {
    // check if there is persistent tasks saved on local storage
    if (storedTasks != null && tasks.length === 0) {
      setTasks(storedTasks);
    }
  }, [storedTasks, tasks.length]);

  const addTask = (task) => {
    // add new tasks
    const tempTasks = [...tasks, task];
    setTasks(tempTasks);
    setStorage("tasks", tempTasks);
  };

  const setToDone = (id) => {
    // move a task into done
    const index = tasks.findIndex((task) => task.id === id);
    const tempTasks = [...tasks];
    tempTasks[index].done = true;
    setTasks(tempTasks);
    setStorage("tasks", tempTasks);
  };

  const remove = (id) => {
    // remove a task
    const index = tasks.findIndex((task) => task.id === id);
    const tempTasks = [...tasks];
    tempTasks.splice(index, 1);
    setTasks(tempTasks);

    if (tempTasks.length === 0) {
      setStorage("tasks", null);
      return;
    }
    setStorage("tasks", tempTasks);
  };

  const clearTasks = () => {
    // clear all tasks
    setTasks([]);
    setStorage("tasks", null);
  };

  return (
    <TasksContext.Provider
      value={{ tasks, addTask, setToDone, clearTasks, remove }}
    >
      <div className="App">
        <Header />
        <Container>
          <Routes />
          <Button onClick={clearTasks}>Remove all tasks</Button>
        </Container>
      </div>
    </TasksContext.Provider>
  );
}

export default App;
