import { ADD_COMPLETE_TASK, ADD_NEW_TASK, REMOVE_COMPLETE_TASK, REMOVE_NEW_TASK } from "../actions/constants";
import { initialState } from "../state";

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload
                ]
            };
        case REMOVE_NEW_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            };
        case ADD_COMPLETE_TASK:
            return {
                ...state,
                completeTasks: [
                    ...state.completeTasks,
                    action.payload
                ]
            };
        case REMOVE_COMPLETE_TASK:
            return {
                ...state,
                completeTasks: state.completeTasks.filter(task => task.id !== action.payload)
            };
        default:
            return state
    }
}