import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../root/Root";
import AddedCoffee from "../pages/AddedCoffee";
import DetailsCoffee from "../components/DetailsCoffee/DetailsCoffee";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('http://localhost:3000/coffees')
            },
            {
                path: 'added-coffee',
                Component: AddedCoffee
            },
            {
                path:'/coffee-details/:id',
                Component: DetailsCoffee,
                loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`)
            }
        ]
    }
])

export default router