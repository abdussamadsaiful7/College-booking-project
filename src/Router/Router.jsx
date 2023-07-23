import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Components/Main/Main";
import Home from "../Components/HomePage/Home/Home";
import CollegeDetails from "../Components/HomePage/CollegeCard/CollegeDetails";
import CollegeCard from "../Components/HomePage/CollegeCard/CollegeCard";
import Review from "../Components/HomePage/Review/Review";
import Admission from "../Components/Admission/Admission";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import Profile from "../Components/Profile/Profile";


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
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/signUp',
          element: <SignUp/>
        },
        {
          path: '/profile',
          element: <Profile/>
        }
      ]
    },
  ]);

  export default router;