import { FILL_TASKS, ADD_TASK, COMPLETE_TASK, DELETE_TASK } from '../reduxActions/actions';

export default function taskReducer(state={tasks: []}, action){
    switch(action.type){

        case FILL_TASKS: 
            return {...state, tasks: action.payload.tasks}

        case ADD_TASK: 
            //make task here
            const task = {
                desc: action.payload.desc, 
                completed: false,
                time: action.payload.time
            }
            console.log(task)
            return {...state, tasks: [...state.tasks, task].flat()}

        case COMPLETE_TASK:
            var updatedTask = action.payload.task
            updatedTask.completed = true
            //get id of task to swap
            var taskSwapped = state.tasks.find(task => task.desc === updatedTask.desc)
            var idxToSwap = state.tasks.indexOf(taskSwapped)
            // replaces 1 element at index 4
            state.tasks.splice(idxToSwap,1, updatedTask)
            return {...state, tasks: [...state.tasks]}

        case DELETE_TASK:
            //find task and slice it

            //get id of task to swap
            if(state.tasks.length === 1){
                state.tasks = []
            }
            var taskToDelete = state.tasks.find(task => task.desc === action.payload.task.desc)
            var idxOfTaskToDelete = state.tasks.indexOf(taskToDelete)
            if(idxOfTaskToDelete === 0){
                state.tasks = state.tasks.slice(idxOfTaskToDelete + 1, state.tasks.length+1)
            }else {
                state.tasks = [state.tasks.slice(0,idxOfTaskToDelete), state.tasks.slice(idxOfTaskToDelete + 1, state.tasks.length+1)].flat();
            }
            return {...state, tasks: [...state.tasks]}

        default: 
            return state
    }
}