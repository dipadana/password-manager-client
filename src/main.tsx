import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "sweetalert2/src/sweetalert2.scss";

import router from "./router";
import "./index.css";
import { OpenAPI } from "./api/generated";

// TODO: Add Config the header request here, currently we need setup the authentication in header manually
OpenAPI.BASE = import.meta.env.VITE_API_BASE_URL;
// OpenAPI.HEADERS = {
//   Authorization: ``,
// };

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
