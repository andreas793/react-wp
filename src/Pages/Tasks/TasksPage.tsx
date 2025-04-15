import {Table, TaskTableDataTypes} from "../../components/ui/Table/Table.tsx";
import {useEffect, useState} from "react";
import WPAPI from "wpapi";

export const TasksPage = () => {
    const [tasks, setTasks] = useState([]);
    const wp = new WPAPI({ endpoint: 'http://localhost/react-wp/wp-json' });
    wp.tasks = wp.registerRoute('wp/v2', 'tasks');
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const fetchedTasks = await wp.tasks().get();
                setTasks(fetchedTasks);
            }
            catch (e) {
                console.log(e)
                return [];
            }
        }
        fetchTasks();
    }, [])
    const data: TaskTableDataTypes = {
        columns: [
            { title: 'Название', name: 'name', cell: function cell(row){ return row.name } },
            { title: "Компетенции", name: "competences", cell: function cell(row){ return row.competences }},
        ],
        rows: tasks.map(({title, meta}) => ({name: title["rendered"], competences: meta['competences']}))
    }
    return <Table data={data} title={"Задачи"}/>
};