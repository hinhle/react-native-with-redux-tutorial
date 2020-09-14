import { connect } from 'redux';
import TaskListComponent from '../components/TaskListComponent';


const mapStateToProps = (state) => {
    return {
        tasks: !state.taskReducers ? [] : state.taskReducers
    }
}

const TaskListContainer = connect(mapStateToProps)(TaskListComponent);
export default TaskListContainer;
