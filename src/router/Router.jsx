import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../components/App";
import Home from "../pages/Home";
import About from "../pages/About";
import Experience from "../pages/Experience";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {index: true, element: <Home />},
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "experience",
                    element: <Experience />
                }
            ]
        },
    ]);

    return <RouterProvider router={router} />;
}

export default Router;