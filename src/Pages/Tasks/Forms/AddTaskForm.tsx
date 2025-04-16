import {FC} from "react";
import {useAppDispatch} from "../../../hooks/hooks.ts";
import {useForm} from "react-hook-form";
import {addTask} from "../../../redux/taskReducer.ts";
import styled from "styled-components";

export const AddTaskForm: FC  = () => {
    const dispatch = useAppDispatch()
    const { register, handleSubmit, reset } = useForm<{name: string, competences: string }>();

    const onSubmit = handleSubmit(({name, competences}) => {
        dispatch(addTask({ name: name, competences: competences }));
        reset();
    });
    return (
        <form onSubmit={onSubmit}>
            <Input type="text"
                   placeholder={"Имя"} {...register('name', {required: 'Username is required'})}/>
            <Input type="text" placeholder={"Компетенции"} {...register('competences')} />
            <button type="submit">Добавить</button>
        </form>
    )
}

const Input = styled.input`
    background-color: #fff;
    color: #000`;