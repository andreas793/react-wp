import {Table} from "../../components/ui/Table/Table.tsx";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import {fetchEmployees} from "../../redux/employeesReducer.ts";

export const EmployeesPage = () => {
    const tableData = useAppSelector(({employees}) => employees);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    return <Table data={tableData} title={"Сотрудники"}/>
}