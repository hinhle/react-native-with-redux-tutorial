import {ADD_NEW_TASK, TOGGLE_ONE_TASK} from "../actions/actionType";


const taskReducers = (tasks = [], action) => {
    switch(action.type){
        case ADD_NEW_TASK:
            return [
                ...tasks,
                {
                    taskID: action.taskID,
                    taskName: action.taskName,
                    completed: false,
                }
            ]
        case TOGGLE_ONE_TASK:
            return tasks.map(task => 
                (task.taskID === action.taskID)
                ? {...task, completed: !task.completed}
                :task)
        default: 
                return tasks; //State does not change

    }
}
export default taskReducers;