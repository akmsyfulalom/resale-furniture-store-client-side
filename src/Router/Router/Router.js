import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Blogs from "../../Pages/Blogs/Blogs";
import ViewBlog from "../../Pages/Blogs/ViewBlog";
import AddAProduct from "../../Pages/Dashboard/AddAProduct/AddAProduct";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import ReportItems from "../../Pages/Dashboard/ReportItems/ReportItems";
import Welcome from "../../Pages/Dashboard/Welcome/Welcome";
import CategoriesProduct from "../../Pages/Home/Categories/CategoriesProduct/CategoriesProduct";
import Home from "../../Pages/Home/Home/Home";
import ContactUs from "../../Pages/Sheard/ContactUs/ContactUs";
import Shop from "../../Pages/Shop/Shop";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/products/:id',
                element: <CategoriesProduct></CategoriesProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)

            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>,
                loader: () => fetch('http://localhost:5000/blogs')

            },
            {
                path: '/blogs/:id',
                element: <ViewBlog></ViewBlog>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`)
            },




        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Welcome></Welcome>
            },
            {
                path: '/dashboard/allSeller',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/allBuyer',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/reportedItems',
                element: <ReportItems></ReportItems>
            },

            {
                path: '/dashboard/myProduct',
                element: <MyProduct></MyProduct>
            },

            {
                path: '/dashboard/addProduct',
                element: <AddAProduct></AddAProduct>
            },
            {
                path: '/dashboard/myOrders',
                element: <MyOrders></MyOrders>
            },
        ]
    }



])
export default router;