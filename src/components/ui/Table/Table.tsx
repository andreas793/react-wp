import {FC} from "react";
import {TableProps} from "./types.ts";
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