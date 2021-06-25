import React from "react";
import style from "./TaskButton.module.css";
import { NavLink } from "react-router-dom";

const TaskButtonOk = (props) => {
  let id = props.id;
  let comleteTask = () => {
    props.dispatch({ type: "COMPLETE-TASK", taskId: { id } });
  };

  return (
    <div className={style.button}>
     <NavLink to="/taskList">
        <div className={style.btnOk} onClick={comleteTask}>
        </div>
     </NavLink>
    </div>
  );
};

export default TaskButtonOk;
