import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Welcome from "../../Pages/Dashboard/Welcome/Welcome";
import Home from "../../Pages/Home/Home/Home";
import ContactUs from "../../Pages/Sheard/ContactUs/ContactUs";
import ProductDetails from "../../Pages/Shop/ProductDetails/ProductDetails";
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
                element: <ProductDetails></ProductDetails>,
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

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Welcome></Welcome>
            }
        ]
    }



])
export default router;