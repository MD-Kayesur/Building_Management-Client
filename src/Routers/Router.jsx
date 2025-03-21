import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../All_Pages/Home/Home";
import Page from "../All_Pages/Pages/Page";
import Apartment from "../All_Pages/Apartment/Apartment";
import Blog from "../All_Pages/Blogs/Blog";
import Login from "../SignPage/Login";
import Signup from "../SignPage/Signup";
import PrivateRoute from "../PrivateRoute/PrivetRoute";
import AgreeMent from "../Components/Agreement/AgreeMent";
import Details from "../Components/Details/Details";
import CuponDetails from "../All_Pages/Home/cuponDetails/CuponDetails";
import AllCupons from "../All_Pages/Home/cuponDetails/AllCupons";
import Location from "../All_Pages/Home/Location";
import DashBors from "../UserPages/DashBord/DashBors";
import Announcements from "../UserPages/DashBord/Announcements";
import MyProfile from "../UserPages/DashBord/MyProfile";
import AdminAnnouncements from "../UserPages/DashBord/AdminUser/AdminAnnouncements";
import AllUsers from "../UserPages/DashBord/AdminUser/AllUsers";
 
 

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayout></MainLayout> ,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/pages',
            element:<Page></Page>
        },
        {
            path:'/apartment',
            element:< PrivateRoute ><Apartment></Apartment></ PrivateRoute >
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        },
        {
            path:'/agreenent/:id',
            element:<PrivateRoute ><AgreeMent></AgreeMent></PrivateRoute >,
            // loader:({params})=> fetch(`http://localhost:5173/agreenent/${params.id}`)
        },
        {
            path:'/details/:id',
            element:<PrivateRoute ><Details></Details></PrivateRoute > ,
            // loader:({params})=> fetch(`http://localhost:5173/agreenent/${params.id}`)
        },
        {
            path:'/cupondetails/:id',
            element:<PrivateRoute>< CuponDetails></ CuponDetails></PrivateRoute>,
            // loader:({params})=> fetch(`http://localhost:5173/agreenent/${params.id}`)
        },
        {
            path:'/allcupons',
            element:<PrivateRoute>< AllCupons></ AllCupons></PrivateRoute>,
            // loader:({params})=> fetch(`http://localhost:5173/agreenent/${params.id}`)
        },
        {
            path:'/location',
            element:<PrivateRoute>< Location></ Location></PrivateRoute>,
            // loader:({params})=> fetch(`http://localhost:5173/agreenent/${params.id}`)
        },
      ]
    },
    {
        path:'/dashbord',
        element:<DashBors></DashBors>,
        children:[
            {
                path: "Announcements",
                element: <Announcements></Announcements>,
              },
            {
                path: "myprofile",
                element: <MyProfile></MyProfile>,
              },
            {
                path: "adminAnnouncements",
                element: <AdminAnnouncements></AdminAnnouncements>,
              },
            {
                path: "allusers",
                element: < AllUsers></ AllUsers>,
              },
        ]
    }
  ]);
  export default router