import { combineReducers } from 'redux';
import taskReducers from './taskReducers';
import counterReducers from './counterReducers';

const allReducers = combineReducers({
    taskReducers,
    counterReducers
});
export default allReducers;