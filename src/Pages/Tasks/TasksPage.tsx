import {Table} from "../../components/ui/Table/Table.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import {removeTask} from "../../redux/taskReducer.ts";
import {AddTaskForm} from "./Forms/AddTaskForm.tsx";

export const TasksPage = () => {
    const dispatch = useAppDispatch()

    const tableData = useAppSelector(({task}) => task);

    const removeRow  = (index: number) => {
        dispatch(removeTask(index));
    }
    return <Table data={tableData} title={"Задачи"} actions={<AddTaskForm />} removeRow={removeRow}/>
};