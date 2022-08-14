import { combineReducers } from "redux";
import { reducerTask } from '../reducers/TaskReducer';

const rootReducer = combineReducers({task:reducerTask});

export default rootReducer;