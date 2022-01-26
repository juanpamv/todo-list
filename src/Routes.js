import React from "react";
import { Routes, Route } from "react-router-dom";
import TodoList from "./pages/TodoList";
import Done from "./pages/Done";

const routes = () => {
  return (
    <Routes>
      <Route index path="/" element={<TodoList />} />
      <Route path="/done" element={<Done />} />
    </Routes>
  );
};

export default routes;
