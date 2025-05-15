import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../root/Root";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }
])

export default router