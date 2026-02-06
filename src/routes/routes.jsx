import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout"
import Home from "../pages/Home";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Services from "../pages/Services";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/blog",
            element: <Blog />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/services",
            element: <Services/>,
        },
        ]
    },
]);