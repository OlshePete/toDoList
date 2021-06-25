import React from "react";
import style from "./TaskItem.module.css";
import TaskButtonOk from "./TaskButtonOk";
import TaskButtonDel from "./TaskButtonDel";

const TaskItem = (props) => {

  let st=(props.status === false ? style.completed:"");
  console.log(st);
  return (
    <div className={style.app_wrapper + " " +st}>
      <TaskButtonOk  id={props.id} dispatch={props.dispatch}/>  
      <div className={style.text}> <p> {props.text} </p> </div>
      <TaskButtonDel  id={props.id} dispatch={props.dispatch}/>  
    </div>
  );
};

export default TaskItem;
