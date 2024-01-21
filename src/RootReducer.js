import { combineReducers } from "redux";
import albumReducer from './albumSlice'

const rootReducer = combineReducers({
    albums: albumSlice,
});

export default rootReducer;