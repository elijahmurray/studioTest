export const FILL_TASKS = 'FILL_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const fillRedux = (tasks: any) => (
  dispatch: Function
  ) => {
    return dispatch({
      type: FILL_TASKS,
      payload: {tasks: tasks}
    })
}

export const completeTask = (task: any) => (
  dispatch: Function
  ) => { 
  return dispatch({
    type: COMPLETE_TASK,
    payload: {task: task}
  })
}


export const addTask = (desc: any, time: string) => (
    dispatch: Function
  ) => {
    
  return dispatch({
    type: ADD_TASK,
    payload: { 
      desc: desc,
      time: time
    }
  });
};


export const deleteTask = (task: any) => (
  dispatch: Function
  ) => { 
  return dispatch({
    type: DELETE_TASK,
    payload: {task: task}
  })
}
