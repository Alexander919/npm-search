import { combineReducers } from "redux";
import repositoriesReducer from "./repositotiesReducer";

const reducers = combineReducers({
    repositories: repositoriesReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;