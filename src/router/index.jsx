import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { ROUTES } from "../routes";
import CommonLayout from "../layout/CommonLayout";
import Homepage from "../pages/Homepage";
import SkillsList from "../components/SkillList";
import ProjectList from "../components/projects/ProjectList";
import Contact from "../components/contact/Contact";

export const router = createBrowserRouter([
    {
        path: `${ROUTES.Home}`,
        element: <CommonLayout />,
        children: [
          {
              path: `${ROUTES.Home}`,
              element: <Homepage />,
            },
            {
                path: `${ROUTES.Skilllist}`,
                element: <SkillsList />,
              },
              {
                path: `${ROUTES.ProjectList}`,
                element: <ProjectList />,
              },

              {
                path: "/contact",
                element: <Contact />,
              },
        ]
    }


]);