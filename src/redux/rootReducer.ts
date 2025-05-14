import taskReducer from "./taskReducer.ts";
import employeesReducer from "./employeesReducer.ts";
import postsReducer from "./postsReducer.ts";

export const rootReducer = {
    reducer: {
        task: taskReducer,
        employees: employeesReducer,
        posts: postsReducer,
    },
}