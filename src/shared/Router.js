import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Todo from "../pages/Todo";

const Router = () => {
  const [cards, setCards] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo cards={cards} setCards={setCards} />} />
        <Route
          path="detail/:id"
          element={<Detail cards={cards} setCards={setCards} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
