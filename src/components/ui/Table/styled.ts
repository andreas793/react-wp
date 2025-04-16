import styled from "styled-components";

export const TableWrapper = styled.table`
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

export const TableRow = styled.tr``;

export const TableCell = styled.td``;

export const ActionPanel = styled.div`
    margin-top: 12px;
    form{
        display: flex;
        justify-content: flex-end;
        gap: 8px;
    }
`;