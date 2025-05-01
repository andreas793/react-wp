import { useForm } from "react-hook-form"
import styled from "styled-components";
import {Input} from "../../components/ui/Form/Input.tsx";
import {Button} from "../../components/ui/Form/Button.tsx";

export const LoginPage = () => {

    const { handleSubmit, reset, register } = useForm<{login: string, password: string}>()

    const onSubmit = handleSubmit(({login, password}) => {
        console.log(login, password);
        reset();
    })

    return <Wrapper>
        <form onSubmit={onSubmit}>
            <h2>Login</h2>
            <Input
                type="text"
                placeholder={"Login"}
                { ...register("login", { required: 'Username is required' })}
            />
            <Input
                type="text"
                placeholder={"Name"}
                { ...register("password", { required: 'password is required' })}
            />
            <Button label={"Login"}/>
            <Button type="reset" label={"Отмена"} variant="outline" />
        </form>
    </Wrapper>
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2{
        text-align: center;
    }
    form {
        width: 250px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`;
