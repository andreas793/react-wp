import {Table} from "../../components/ui/Table/Table.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import { fetchTasks} from "../../redux/taskReducer.ts";
import {useEffect} from "react";

export const TasksPage = () => {
    const tableData = useAppSelector(({task}) => task);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);


    return <Table data={tableData} title={"Задачи"}/>
};