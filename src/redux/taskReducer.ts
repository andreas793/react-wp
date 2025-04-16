import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RowsTypes, TaskTableDataTypes} from "../components/ui/Table/types.ts";
import WPAPI from "wpapi";


const wp = new WPAPI({ endpoint: 'http://localhost/react-wp/wp-json' });
wp.tasks = wp.registerRoute('wp/v2', 'tasks');

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async () => {
        const response = await wp.tasks().get();
        const tasks: RowsTypes[] = response.map(({title, meta}:{title: {rendered: string}, meta: {competences: string}}) => ({ name: title["rendered"], competences: meta["competences"] }));
        return tasks;
    }
)

const initialState: TaskTableDataTypes = {
    columns: [
        { title: 'Название', name: 'name' },
        { title: "Компетенции", name: "competences"},
    ],
    rows: []
}

const tasksSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        addTask: () => {}
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.rows = [...action.payload];
            })
    }
})

export const {addTask} = tasksSlice.actions;

export default tasksSlice.reducer;