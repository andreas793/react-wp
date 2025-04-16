import { createSlice} from "@reduxjs/toolkit";
import {TaskTableDataTypes} from "../components/ui/Table/types.ts";



// const fetchTasks = createAsyncThunk(
//     'tasks/fetchTasks',
//     async () => {
//         const wp = new WPAPI({ endpoint: 'http://localhost/react-wp/wp-json' });
//         wp.tasks = wp.registerRoute('wp/v2', 'tasks');
//         console.log("+++++");
//         const response = await wp.tasks().get();
//         return response;
//     }
// )

const initialState: TaskTableDataTypes = {
    columns: [
        { title: 'Название', name: 'name', cell: function cell(row){ return row.name } },
        { title: "Компетенции", name: "competences", cell: function cell(row){ return row.competences }},
    ],
    rows: [
        { name: "Редактировать", competences: "front-end"},
        { name: "Создавать", competences: "front-end" },
        { name: "Удалять", competences: "front-end" },
        { name: "Искать", competences:  "front-end"},
    ]
}

const tasksSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            state.rows = [...state.rows, action.payload];
        },
        removeTask: (state, action) => {
            state.rows.splice(action.payload, 1);
        },
    }
})

export const {addTask, removeTask} = tasksSlice.actions;

export default tasksSlice.reducer;