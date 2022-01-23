import { combineReducers } from 'redux';
import buttonReducer from './buttonReducer';
import elevatorReducer from './elevatorReducer';

const reducers = combineReducers({
    buttonReducer,
    elevatorReducer
});
export default reducers;

