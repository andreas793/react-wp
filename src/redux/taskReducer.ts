import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RowsTypes, TaskTableDataTypes} from "../components/ui/Table/types.ts";
import WPAPI from "wpapi";


const wp = new WPAPI({
    endpoint: 'http://localhost/react-wp/wp-json',
});
wp.tasks = wp.registerRoute('wp/v2', 'tasks/(?P<id>)');

const fetchTasksList = async () => {
    const response = await wp.tasks().get();
    const tasks: RowsTypes[] = response.map(({id, title, meta}: {
        id: string,
        title: { rendered: string },
        meta: { competences: string }
    }) => ({id: id, name: title["rendered"], competences: meta["competences"]}));
    return tasks;
}

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    fetchTasksList,
)

export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (taskID: number) => {
        await wp.tasks().id(taskID).auth({
            username: 'admin',
            password: '!ZjaUqmKMWBUsRDE(r',
        }).delete();
        return fetchTasksList();
    }
)

const initialState: TaskTableDataTypes = {
    columns: [
        {title: 'Название', name: 'name'},
        {title: "Компетенции", name: "competences"},
    ],
    rows: []
}

const tasksSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.rows = [...state.rows, action.payload];
        },
        removeTask: () => {

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.rows = [...action.payload];
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.rows = [...action.payload];
            })
    }
})

export const {addTask, removeTask} = tasksSlice.actions;

export default tasksSlice.reducer;