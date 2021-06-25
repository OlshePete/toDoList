let store = {
  _state: {
    tasksData: {
      tasksList: [
        {
          id: 0,
          value: "meet my mother",
          status: true,
        },
        {
          id: 1,
          value: "this task completed",
          status: false,
        },
        {
          id: 2,
          value: "meet my brother",
          status: true,
        },
        {
          id: 3,
          value: "meet my sister",
          status: true,
        },
        {
          id: 4,
          value: "meet my father",
          status: true,
        },
      ],

      newTaskText: "enter new task here",
    },
  },
  getState() {
    return this._state;
  },
  _addTask(taskText) {
    let newTask = {
      id: ++this._state.tasksData.tasksList.length,
      value: taskText.newText,
      status: true,
    };
    this._state.tasksData.tasksList.push(newTask);
  },
  _deleteTask(taskId) {
    let index = this._state.tasksData.tasksList.findIndex(d => d.id === taskId.id);
    this._state.tasksData.tasksList.splice(index, 1);
  },

  _completeTask(taskId) {
    let index = this._state.tasksData.tasksList.findIndex(d => d.id === taskId.id);
    this._state.tasksData.tasksList[index].status = false;
  },

  dispatch(action) {
    if (action.type === "ADD-TASK") {
      this._addTask(action.text);
    } else if (action.type === "COMPLETE-TASK") {
      this._completeTask(action.taskId);
    } else if (action.type === "DELETE-TASK") {
      this._deleteTask(action.taskId);
    }
  },
};

export default store;
