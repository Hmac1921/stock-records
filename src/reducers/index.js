import cowReducer from "./cowReducers";
import updateReducer from "./updateReducers";
import {
    combineReducers
} from "redux";
//making an object of reducers so i can use both cow and medicine data. 
const allReducers = combineReducers({
    cows: cowReducer,
    update: updateReducer
})
export default allReducers