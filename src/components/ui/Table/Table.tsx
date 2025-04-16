import {FC} from "react";
import {RowsTypes, TableProps} from "./types.ts";
import {ActionPanel, TableCell, TableRow, TableWrapper} from "./styled.ts";



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
                {rows.map((row) => (
                    <TableRow key={row.id}>
                        {columns.map(({name}, index) => <TableCell key={index}>{row[name as keyof RowsTypes]}</TableCell>)}
                        { removeRow &&
                            <TableCell>
                                <button onClick={() => removeRow(row.id)}>Удалить</button>
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