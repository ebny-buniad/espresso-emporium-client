import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../root/Root";
import AddedCoffee from "../pages/AddedCoffee";
import DetailsCoffee from "../components/DetailsCoffee/DetailsCoffee";
import UpdateDetails from "../components/UpdateDetails/UpdateDetails";
import { Component } from "react";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Signin from "../pages/Signin";
import AuthLayout from "../Auth/AuthLayout";
import Signup from "../pages/Signup";

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
                path: '/coffee-details/:id',
                Component: DetailsCoffee,
                loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`)
            },
            {
                path: '/update-details/:id',
                Component: UpdateDetails,
                loader: ({ params }) => fetch(`http://localhost:3000/coffees/${params.id}`)
            },
            {
                path: '*',
                Component: ErrorPage
            }
        ],
    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            { path: '/auth/sign-in', Component: Signin },
            { path: '/auth/sign-up', Component: Signup }
        ]
    }
])

export default router