import {FC, useState} from "react";
import styled from "styled-components";
import {ArrowLeft, Employees, LogoIcon, TasksIcon} from "./ui/Icons/Icons.tsx";
import {NavLink} from "react-router-dom";
import {Icon} from "./ui/Icons/Icon.tsx";

const menuList = [
    { title: 'Вход', url: './Login' },
    {title: 'Посты', url: '/', icon: <LogoIcon />},
    {title: 'Задачи', url: '/tasks', icon: <TasksIcon />},
    {title: 'Сотрудники', url: '/employees', icon: <Employees />},
]

export const Sidebar: FC = () => {
    const [closedMenu, setClosedMenu] = useState(false);
    return (
        <Wrapper className={closedMenu ? 'closed-menu' : ''}>
            <ul>
                <ActionItem onClick={() => { setClosedMenu(!closedMenu) }}>
                    <Icon element={<LogoIcon/>}/>
                    Workspace
                    <ActionBtn>
                        <Icon element={<ArrowLeft/>}/>
                    </ActionBtn>
                </ActionItem>
                {menuList.map(({title, url, icon}) => (
                    <NavLink to={url} key={url}>
                        <MenuItem key={url}>
                            <Icon element={icon}/>
                            {title}
                        </MenuItem>
                    </NavLink>
                ))}
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.menu`
    display: block;
    width: 250px;
    min-width: 250px;
    height: 100%;
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    padding: 10px;
    z-index: 1;
    background-color: transparent;
    overflow: hidden;
    transition: all 0.3s;
    &.closed-menu {
        padding: 5px;
        width: 50px;
        min-width: 50px;
    }
`;

const MenuItem = styled.li`
    cursor: pointer;
    display: flex;
    gap: 8px;
    width: 100%;
    margin: 0 0 8px 0;
    padding: 10px 10px 10px 15px;
    color: #2498ED;
    font-weight: bold;
    background-color: transparent;
    border-radius: 318px;
    overflow: hidden;
    transition: all 0.3s, border-radius 0.6s;
    &:hover, 
    a.active & {
        color: #fff;
        background-color: #2498ED;
    }
    .closed-menu & {
        width: 40px;
        border-radius: 4px;
        padding: 10px;
        gap: 10px;
        svg {
            width: 20px;
        }
    }`

const ActionItem = styled(MenuItem)`
    color: #000;
    margin-bottom: 24px;
    overflow: hidden;
    width: 100%;
    &:hover{
        color: #000;
        background-color: transparent;
    }
    .closed-menu & {
        width: 40px;
        gap: 10px;
        padding: 0;
    }
`;

const ActionBtn = styled.div`
    background-color: #FFB156;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    color: rgba(255, 255, 255, .5);
    .closed-menu & {
        order: -1;
        border-radius: 4px;
        min-width: 40px;
        min-height: 40px;
        color: #000;
        svg{
            transition-delay: 0.6s;
            transform: rotate(180deg);
            transition: transform .8s;
        }
    }`;

