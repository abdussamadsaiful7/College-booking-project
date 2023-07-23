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
import AddForm from "../Components/Admission/AddForm";
import MyCollege from "../Components/MyCollege/MyCollege";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import FourPage from "../Components/F404Page/FourPage";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <FourPage></FourPage>,
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
          element: <PrivateRoute><CollegeDetails/></PrivateRoute>,
          loader: ({params}) =>fetch(`http://localhost:5070/colleges/${params.id}`)
        },
        {
          path: '/admission',
          element: <Admission/>,
          
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

        },
        {
          path: '/addForm',
          element: <AddForm/>
        },
        {
          path: '/myCollege',
          element: <PrivateRoute><MyCollege/></PrivateRoute>
        }
      ]
    },
  ]);

  export default router;