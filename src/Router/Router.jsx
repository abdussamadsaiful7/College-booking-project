import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/HomePage/Home/Home";
import CollegeDetails from "../Components/HomePage/CollegeCard/CollegeDetails";
import CollegeCard from "../Components/HomePage/CollegeCard/CollegeCard";
import Review from "../Components/HomePage/Review/Review";
import Admission from "../Components/Admission/Admission";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/collegeCard',
          element: <CollegeCard/>,
        },
        {
          path: '/colleges/:id',
          element: <CollegeDetails/>,
          loader: ({params}) =>fetch(`http://localhost:5070/colleges/${params.id}`)
        },
        {
          path: '/admission',
          element: <Admission/>
        }
      ]
    },
  ]);

  export default router;