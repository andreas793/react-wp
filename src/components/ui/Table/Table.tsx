import {FC, ReactNode} from "react";
import styled from "styled-components";

interface TableProps {
    actions?: ReactNode;
    data: EmployeesTableDataTypes | TaskTableDataTypes | PostsTableDataTypes;
    removeRow?: (index: number) =>void;
    title: string;
}

interface ColumnsTypes {
    title: string;
    name: string;
    cell: (row: RowsTypes) => ReactNode;
}

interface RowsTypes {
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

export const Table: FC<TableProps> = ({actions, data, title, removeRow}) => {
    const { columns, rows } = data;
    return (<>
            <h2>{title}</h2>
            <TableWrapper>
                <thead>
                    <TableRow>
                        {columns.map(({name, title}) => <TableCell key={name}>{title}</TableCell>)}
                    </TableRow>
                </thead>
                <tbody>
                {rows.map((row, index) => (
                    <TableRow key={index}>
                        {columns.map(({cell}, index) => (
                            <TableCell key={index}>{cell(row)}</TableCell>
                        ))}
                        { removeRow &&
                            <TableCell>
                                <button onClick={() => removeRow(index)}>Удалить</button>
                            </TableCell>
                        }
                    </TableRow>
                ))}
                </tbody>
            </TableWrapper>
            {actions &&
                <ActionPanel>
                    {actions}
                </ActionPanel>}
        </>
    )
}

const TableWrapper = styled.table`
    width: 100%;

    thead td {
        font-weight: bold;
        padding: 5px;
        background: #efefef;
        border: 1px solid #dddddd;
    }

    tbody {

        tr:nth-child(odd) {
            background: rgba(255, 255, 255, 0.05);
        }

        tr:nth-child(even) {
            background: rgba(255, 255, 255, 0.7);;
        }

        td {
            padding: 5px 10px;
            border: 1px solid #eee;
            text-align: left;
        }

        td:last-child {

        }
    }
`;

const TableRow = styled.tr``;

const TableCell = styled.td``;

const ActionPanel = styled.div`
    margin-top: 12px;
    form{
        display: flex;
        justify-content: flex-end;
        gap: 8px;
    }
`;