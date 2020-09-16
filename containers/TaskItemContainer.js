import { connect } from "react-redux";
import { toggleNewTask } from "../actions";
import TaskItemComponent from "../components/TaskItemComponent";
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (taskID) => {
      dispatch(toggleNewTask(taskID));
    },
  };
};
const TaskItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskItemComponent);
export default TaskItemContainer;
