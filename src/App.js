import React from "react"
import style from'./App.module.css';
import Header from "./components/Header/Header"
import TaskList from "./components/TaskList/TaskList"
import { BrowserRouter, Route } from "react-router-dom";
import AddTask from "./components/AddTask/AddTask";

function App(props) {
  return (
    <BrowserRouter>
      <div className={style.app_wrapper}>
       <div className={style.header}>
          <Header />
        </div>
        <div className={style.content}>
          <Route path='/taskList'  render={ () => <TaskList state={props.state} dispatch={props.dispatch}/>} />
          <Route exact path='/addTask'  render={ () => <AddTask state={props.state} dispatch={props.dispatch}/>} /> 
        </div>
      </div>
    </BrowserRouter>
    );
}

export default App;
