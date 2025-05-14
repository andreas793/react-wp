import taskReducer from "./taskReducer.ts";
import employeesReducer from "./employeesReducer.ts";

export const rootReducer = {
    reducer: {
        task: taskReducer,
        employees: employeesReducer,
    },
}