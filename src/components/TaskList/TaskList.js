import React from "react"
import TaskItem from './TaskItem/TaskItem'
import style from './TaskList.module.css'

const TaskList= props => {
  let taskListMembers = props.state.tasksData.tasksList.sort((a, b) => b.status - a.status).map(d => (<TaskItem id={d.id} dispatch={props.dispatch} text={d.value} status={d.status}/>))
   
  return(
  <div className={style.wrapper}>  
      {taskListMembers}
  </div>
  )
}

export default TaskList;