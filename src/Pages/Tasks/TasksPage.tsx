import {Table} from "../../components/ui/Table/Table.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import {deleteTask, fetchTasks} from "../../redux/taskReducer.ts";
import {useEffect} from "react";

export const TasksPage = () => {
    const tableData = useAppSelector(({task}) => task);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const removeRow  = (taskID: number) => {
        dispatch(deleteTask(taskID));
    }

    return <Table data={tableData} title={"Задачи"} removeRow={removeRow}/>
};