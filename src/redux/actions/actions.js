import { ADD_COMPLETE_TASK, ADD_NEW_TASK, MODIFY_CURRENT_TASK, REMOVE_COMPLETE_TASK, REMOVE_NEW_TASK } from "./constants";

export const addTasks = (value) => ({
    type: ADD_NEW_TASK,
    payload: value
})

export const removeTask = (value) => ({
    type: REMOVE_NEW_TASK,
    payload: value
})

export const addCompleteTasks = (value) => ({
    type: ADD_COMPLETE_TASK,
    payload: value
})

export const removeCompleteTask = (value) => ({
    type: REMOVE_COMPLETE_TASK,
    payload: value
})

export const modifyCurrentTasks = (value) => ({
    type: MODIFY_CURRENT_TASK,
    payload: value
})
