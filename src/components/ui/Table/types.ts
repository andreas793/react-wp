import {ReactNode} from "react";

export interface TableProps {
    actions?: ReactNode;
    data: EmployeesTableDataTypes | TaskTableDataTypes | PostsTableDataTypes;
    removeRow?: (index: number) =>void;
    title: string;
}

export interface ColumnsTypes {
    title: string;
    name: string;
    cell: (row: RowsTypes) => ReactNode;
}

export interface RowsTypes {
    name: string;
    age?: number;
    competences?: string;
    text?: string;
}

export type EmployeesTableDataTypes = {
    columns: ColumnsTypes[];
    rows: RowsTypes[];
}

export type TaskTableDataTypes = {
    columns: ColumnsTypes[];
    rows: RowsTypes[];
}

export type PostsTableDataTypes = {
    columns: ColumnsTypes[];
    rows: RowsTypes[];
}