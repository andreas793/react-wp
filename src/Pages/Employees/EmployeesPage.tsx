import {useEffect, useState} from "react";
import WPAPI from "wpapi";
import {EmployeesTableDataTypes} from "../../components/ui/Table/types.ts";
import {Table} from "../../components/ui/Table/Table.tsx";

// const dataTable: EmployeesTableDataTypes = {
//     columns: [
//         { title: 'ФИО', name: 'name', cell: function cell(row){ return row.name }},
//         { title: "Возраст", name: 'age', cell: function cell(row){ return row.age }},
//         { title: "Компетенции", name: 'competences', cell: function cell(row){ return row.competences }},
//     ],
//     rows: [
//         { name: "Иванов Иван Иванович", age: 30, competences: "front-end"},
//         { name: "Кирилов Кирилл Кириллович", age: 24, competences: "front-end" },
//         { name: "Петров Петор Петрович", age: 60, competences: "front-end" },
//         { name: "Андреев Андрей Андреевич", age: 43, competences:  "front-end"},
//     ]
// }

export const EmployeesPage = () => {
    const [employees, setEmployees] = useState([])
    const wp = new WPAPI({endpoint: 'http://localhost/react-wp/wp-json'});
    wp.employees = wp.registerRoute('wp/v2', 'employees');
    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const fetchedEmployees = await wp.employees().get();
                setEmployees(fetchedEmployees);
            } catch (e) {
                console.log(e)
                return [];
            }
        }
        fetchEmployees();
    }, [])
    const data: EmployeesTableDataTypes = {
        columns: [
            {
                title: 'ФИО', name: 'name',
            },
            {
                title: "Возраст", name: 'age',
            },
            {
                title: "Компетенции", name: 'competences',
            },
        ],
        rows: employees.map(({id, title, meta}) => ({
            id: id,
            name: title["rendered"],
            age: meta["age"],
            competences: meta["competences"]
        })),

    }
    return <Table data={data} title={"Сотрудники"}/>
}