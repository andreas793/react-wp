import styled from "styled-components";
import {FC, InputHTMLAttributes} from "react";


type InputProps = InputHTMLAttributes<HTMLInputElement> & {};

export const Input: FC<InputProps> = ({...inputProps}) => (
    <InputWrapper>
        <input {...inputProps}/>
    </InputWrapper>
)

const InputWrapper = styled.div`
    input{
        display: block;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding: 8px 10px;
        outline: none;
        border: none;
        background-color: rgba(0, 0, 0, .5);
        border-radius: 5px;
        &::placeholder {
           color: #fff; 
        }
    }
`;