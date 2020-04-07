import { FILL_TASKS, ADD_TASK } from '../reduxActions/actions';

export default function taskReducer(state={tasks: []}, action){
    switch(action.type){

        case FILL_TASKS: 
            return {...state, tasks: action.payload.tasks}

        case ADD_TASK: 
            return {...state, tasks: [...state.tasks, action.payload.task].flat()}

        default: 
            return state
    }
}