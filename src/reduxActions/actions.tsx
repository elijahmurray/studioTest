export const FILL_TASKS = 'FILL_TASKS';
export const ADD_TASK = 'ADD_TASK';

export const fillRedux = (tasks: any) => (
  dispatch: Function
  ) => {
    return dispatch({
      type: FILL_TASKS,
      payload: {tasks: tasks}
    })
}


export const addTask = (task: any) => (
    dispatch: Function
  ) => {
    
  return dispatch({
    type: ADD_TASK,
    payload: { task: task }
  });
};
  