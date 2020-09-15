import {ADD_NEW_TASK, TOGGLE_ONE_TASK} from "./actionType";
import {INCREMENT, DECREMENT} from "./actionType";
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

export const increaseAction = (step) => {
    return {
        type: INCREMENT,
        step: step,
    }
}

export const decreaseAction = (step) => {
    return {
        type: DECREMENT,
        step: step,
    }
}