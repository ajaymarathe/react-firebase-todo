// Router

import { createBrowserRouter } from "react-router-dom";
import TaskList from "../components/TaskList";
import Auth from "../components/Auth";
import TaskForm from "../components/TaskForm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskList />,
  },
  {
    path: "/login",
    element: <Auth />
  },
  {
    path: "/signup",
    element: <Auth />
  },
  {
    path: "/tasks/new",
    element: <TaskForm />
  },
  {
    path: "/tasks/edit/:id",
    element: <TaskForm />
  }
]);

export default router;
