import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../root/Root";
import AddedCoffee from "../pages/AddedCoffee";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path:'added-coffee',
                Component: AddedCoffee
            }
        ]
    }
])

export default router