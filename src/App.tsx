import './App.css'
import {Sidebar} from "./components/Sidebar.tsx";
import styled from 'styled-components';
import { Route, Routes} from "react-router-dom";
import {PostsPage} from "./Pages/Posts/PostsPage.tsx";
import {TasksPage} from "./Pages/Tasks/TasksPage.tsx";
import {EmployeesPage} from "./Pages/Employees/EmployeesPage.tsx";
import {ReactNode} from "react";
import {LoginPage} from "./Pages/Login/Login.tsx";

interface routesTypes {
    to: string;
    elem: ReactNode;
}

const routes: routesTypes[] = [
    { to: "/", elem: <PostsPage /> },
    { to: "/tasks", elem: <TasksPage /> },
    { to: "employees", elem: <EmployeesPage /> },
    { to: "/login", elem: <LoginPage /> }
]

function App() {
  return (
    <Wrapper>
        <Sidebar />
        <Main>
            <Routes>
                {routes.map(({to, elem}) => (
                    <Route path={to} element={elem} />
                ))}
            </Routes>
        </Main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: calc(100vh - 32px);
    position: relative;
    overflow: auto;
    box-sizing: border-box;
`;

const Main = styled.main`
    flex-grow: 1;
    padding: 20px;
    z-index: 1;
    height: 100%;
`;

export default App
