import { createBrowserRouter } from "react-router-dom";

import MainLayout, { loader as mainLayoutLoader } from "~~/layouts/main.tsx";

import ChangeKey, {
  action as changeKeyAction,
} from "~~/pages/auth/changeKey.tsx";
import Login, { action as loginAction } from "~~/pages/auth/login.tsx";
import Register, { action as registerAction } from "~~/pages/auth/register.tsx";
import List, { loader as vaultListLoader } from "~~/pages/list.tsx";
import AddType from "~~/pages/addType";
import AddPassword, {
  action as addPasswordAction,
} from "~~/pages/passwords/addPassword";
import EditPassword, {
  loader as editPasswordLoader,
  action as editPasswordAction,
} from "~~/pages/passwords/editPassword";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    loader: mainLayoutLoader,
    children: [
      {
        path: "/",
        element: <List />,
        loader: vaultListLoader,
      },
      {
        path: "/add-type",
        element: <AddType />,
      },
      {
        path: "/change-key",
        element: <ChangeKey />,
        action: changeKeyAction,
      },
    ],
  },
  {
    path: "/password",
    element: <MainLayout />,
    children: [
      {
        path: "/password/add",
        element: <AddPassword />,
        action: addPasswordAction,
      },
      {
        path: "/password/edit/:id",
        element: <EditPassword />,
        loader: editPasswordLoader,
        action: editPasswordAction,
      },
    ],
  },
  {
    path: "/login",
    action: loginAction,
    element: <Login />,
  },
  {
    path: "/register",
    action: registerAction,
    element: <Register />,
  },
]);

export default router;
