import './App.css'
import {Sidebar} from "./components/Sidebar.tsx";
import styled from 'styled-components';
import { Route, Routes} from "react-router-dom";
import {PostsPage} from "./Pages/Posts/PostsPage.tsx";
import {TasksPage} from "./Pages/Tasks/TasksPage.tsx";
import {EmployeesPage} from "./Pages/Employees/EmployeesPage.tsx";


function App() {
  return (
    <Wrapper>
        <Sidebar />
        <Main>
            <Routes>
                <Route path={"/"} element={<PostsPage />} />
                <Route path={"/tasks"} element={<TasksPage />} />
                <Route path={"/employees"} element={<EmployeesPage />} />
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
`;

export default App
