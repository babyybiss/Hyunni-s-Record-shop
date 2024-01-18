import { combineReducers } from "redux";
import albumReducer from './albumSlice'

const rootReducer = combineReducers({
    album: albumReducer,
});

export default rootReducer;