import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Components/Main/Main";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
    },
  ]);

  export default router;