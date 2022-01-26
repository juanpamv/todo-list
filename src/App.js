import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import Container from "@mui/material/Container";

import Header from "./components/header/Header";
import Routes from "./Routes";
import storage from "./utils/localStorage";

export const TasksContext = createContext();

function App() {
  const [tasks, setTasks] = useState([]);
  const { getStorage, setStorage } = storage();
  const storedTasks = getStorage("tasks");

  useEffect(() => {
    if (storedTasks != null && tasks.length === 0) {
      setTasks(storedTasks);
    }
  }, [storedTasks, tasks.length]);

  const addTask = (task) => {
    const tempTasks = [...tasks, task];
    setTasks(tempTasks);
    setStorage("tasks", tempTasks);
  };

  const setToDone = (doneTask) => {
    const index = tasks.findIndex((task) => task.task === doneTask.task);
    const tempTasks = [...tasks];
    tempTasks[index].done = true;
    setTasks(tempTasks);
    setStorage("tasks", tempTasks);
  };

  const clearTasks = () => {
    setTasks([]);
    setStorage("tasks", null);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, setToDone, clearTasks }}>
      <div className="App">
        <Header />
        <Container>
          <Routes />
        </Container>
      </div>
    </TasksContext.Provider>
  );
}

export default App;
