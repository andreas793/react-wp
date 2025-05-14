import WPAPI from "wpapi";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {EmployeesTableDataTypes, RowsTypes} from "../components/ui/Table/types.ts";

const wp = new WPAPI({
    endpoint: 'http://localhost/react-wp/wp-json',
});
wp.employees = wp.registerRoute('wp/v2', 'employees');

const fetchEmployeesList = async () => {
    const response = await wp.employees().get();
    const employees: RowsTypes[]= response.map(({id, title, meta} : {
        id: string,
        title: { rendered: string },
        meta: { competences: string, age: string },
    }) => ({
        id: id,
        name: title["rendered"],
        competences: meta["competences"],
        age: meta["age"]
        })
    );
    return employees;
}

export const fetchEmployees = createAsyncThunk(
    'employees/fetchEmployees',
    fetchEmployeesList,
)

const initialState: EmployeesTableDataTypes = {
    columns: [
        { title: 'ФИО', name: 'name' },
        { title: "Возраст", name: 'age', },
        { title: "Компетенции", name: 'competences', },
    ],
    rows: [],
}

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEmployees.fulfilled, (state, action) => {
                state.rows = [ ...action.payload];
            })
    }
})

export default employeesSlice.reducer;