import {ButtonHTMLAttributes, FC} from "react";
import styled from "styled-components";

type VariantType = 'primary' | 'outline';

interface ButtonPropsCustom {
    label: string;
    variant?: VariantType;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & ButtonPropsCustom;

export const Button: FC<ButtonProps> = ({variant = "primary", label, ...buttonProps}) => (
    <ButtonStyle variant={variant} {...buttonProps}>{label}</ButtonStyle>
)

const ButtonStyle = styled.button<{ variant: VariantType }>`
    border-radius: 4px;
    outline: none;
    padding: 8px 11px;

    color: ${({variant}) => getColor(variant).color};
    border: 1px solid ${({variant}) => getColor(variant).borderColor};
    background-color: ${({variant}) => getColor(variant).backgroundColor};
    &:active, &:focus, &:hover {
        outline: none;
        color: ${({variant}) => getColor(variant).hoverColor};
        border-color: ${({variant}) => getColor(variant).hoverBorderColor};
        background-color: ${({variant}) => getColor(variant).hoverBackgroundColor};
        }
`;

const getColor = (variant: VariantType = 'primary') => {
    return {
        primary: {
            backgroundColor: '#56B8FF',
            color: '#fff',
            borderColor: '#56B8FF',
            hoverBackgroundColor: '#565eff',
            hoverColor: '#fff',
            hoverBorderColor: '#565eff',
        },
        outline: {
            backgroundColor: 'transparent',
            color: '#000',
            borderColor: 'transparent',
            hoverBackgroundColor: 'transparent',
            hoverColor: '#000',
            hoverBorderColor: '#000',
        }
    }[variant];
};