import React from "react";
import { NavLink } from "react-router-dom";
import AddTaskButton from "./AddTaskButton/AddTaskButton";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.title}>
        <NavLink to="/taskList">To Do List</NavLink>
      </div>
      <div className={style.taskBtn}>
        <AddTaskButton />
      </div>
    </div>
  );
};

export default Header;
