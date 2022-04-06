import cowReducer from "./cowReducers";
import updateReducer from "./updateReducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    cows: cowReducer,
    update: updateReducer
})
export default allReducers