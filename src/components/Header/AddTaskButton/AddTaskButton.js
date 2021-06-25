import React from "react";
import { NavLink } from "react-router-dom";
import style from "./AddTaskButton.module.css";

const AddTaskButton = () => {
  return (
    <NavLink to="/addTask">
      <div className={style.button}></div>
    </NavLink>
  );
}

export default AddTaskButton;
