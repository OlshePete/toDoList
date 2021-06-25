import React from "react"
import { NavLink } from "react-router-dom";
import style from './AddTask.module.css'

let newTaskElement = React.createRef();

const AddTask= props => {
let addTask = () => {
  let newText = newTaskElement.current.value;
  props.dispatch({type: "ADD-TASK", text:{newText}});
  newTaskElement.current.value="";
  
  }
let clearText = () => {
    newTaskElement.current.value="";
    }   
return(
  <div className={style.wrapper}>  
   <div className={style.input}> <textarea ref={newTaskElement} type="text" name="name" rows="4" value={props.state.newTaskText} /></div>
    <div className={style.buttons}>
    <NavLink to="/taskList"> <button onClick={addTask}> Add</button></NavLink>
       <button onClick={clearText}> Clear</button>
    </div>
  </div>
)
}

export default AddTask;