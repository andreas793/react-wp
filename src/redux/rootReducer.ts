import taskReducer from "./taskReducer.ts";

export const rootReducer = {
    reducer: {
        task: taskReducer,
    },
}