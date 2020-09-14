import {ADD_NEW_TASK, TOGGLE_ONE_TASK} from "./actionType";
let newTaskID = 0;

export const addNewTask = (inputTaskName) => {
    return {
        type: ADD_NEW_TASK,
        taskID: newTaskID++,
        taskName: inputTaskName
    }
}

export const toggleNewTask = (taskID) => {
    return {
        type: TOGGLE_ONE_TASK,
        taskID: taskID
    }
}