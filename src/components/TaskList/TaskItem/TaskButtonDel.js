import React from "react";
import { NavLink } from "react-router-dom";
import style from "./TaskButton.module.css";

const TaskButtonDel = (props) => {
  let id = props.id;
  let deleteTask = () =>{
      props.dispatch({ type: "DELETE-TASK", taskId: { id } });
    };
  return (
    <div className={style.button}>

     <NavLink to="/taskList">
      <div className={style.btnDel} onClick={deleteTask} ></div> 
    </NavLink>
    </div>
  );
};

export default TaskButtonDel;
