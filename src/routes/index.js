import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Task from "../components/tasks_list/task";
import TaskItem from "../components/tasks_list/task-item";
import TaskInfo from "../components/tasks_list/TaskInfo";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        errorElement: <h2>Error</h2>,
        children: [
            {
                path: ':id',
                element: <TaskInfo />
            },
            {
                path: '/about',
                element: <a href="https://www.instagram.com/le_al_dente/">Сергей Матвейчук</a>
            }
        ]

    }


])
