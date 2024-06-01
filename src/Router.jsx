import { createBrowserRouter } from "react-router-dom";

import Home from "./Components/Home/Home.jsx";
import App from "./App";
import Login from "./Components/Auth/Login/Login";

import Users from "./Components/Users/Users";
import Projects from "./Components/Projects/Projects.jsx";
import Projects_Requests from "./Components/Projects/Requests/Requests.jsx";
import Projects_Applications from "./Components/Projects/Applications/Applications.jsx";
import Projects_Accepted from "./Components/Projects/Accepted/Accepted.jsx";
import Projects_Paying from "./Components/Projects/Paying/Paying.jsx";
import Projects_At_Work from "./Components/Projects/AtWork/AtWork.jsx";

import Feedbacks from "./Components/Feedbacks/Feedbacks.jsx";
import Feedbacks_Clients from "./Components/Feedbacks/Clients_Freedbacks/Clients_Freedbacks.jsx";
import Feedbacks_Freelancers from "./Components/Feedbacks/Freelancers_Feedbacks/Freelancers_Feedbacks.jsx";

import Messages from "./Components/Messages/Messages.jsx";

import Terms from "./Components/Terms/Terms.jsx";

import Contact from "./Components/Contact/Contact.jsx";
import Not_Found from "./Components/Not_Found";
import Not_Finished from "./Components/Not_Finished";
import ErrorElement from "./Components/ErrorElement";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            // {
            //     index: true,
            //     element: <Default />,
            //     errorElement: <ErrorElement />,
            // },
            {
                path: "/Home",
                element: <Home />,
                errorElement: <ErrorElement />,
            },
            {
                path: "/Users",
                element: <Users />,
                errorElement: <ErrorElement />,
            },

            {
                path: "/Projects_Requests",
                element: <Projects_Requests />,
                errorElement: <ErrorElement />,
            },
            {
                path: "/Projects_Applications",
                element: <Projects_Applications />,
                errorElement: <ErrorElement />,
            },
            {
                path: "/Projects_Accepted",
                element: <Projects_Accepted />,
                errorElement: <ErrorElement />,
            },
            {
                path: "/Projects_Paying",
                element: <Projects_Paying />,
                errorElement: <ErrorElement />,
            },
            {
                path: "/Projects_At_Work",
                element: <Projects_At_Work />,
                errorElement: <ErrorElement />,
            },

            {
                path: "/Feedbacks_Clients",
                element: <Feedbacks_Clients />,
                errorElement: <ErrorElement />,
            },
            {
                path: "/Feedbacks_Freelancers",
                element: <Feedbacks_Freelancers />,
                errorElement: <ErrorElement />,
            },

            {
                path: "/Messages",
                element: <Messages />,
                errorElement: <ErrorElement />,
            },
            {
                path: "/Terms",
                element: <Terms />,
                errorElement: <ErrorElement />,
            },
            {
                path: "/Contact",
                element: <Contact />,
                errorElement: <ErrorElement />,
            },
        ],
    },
    {
        path: "/Login",
        element: <Login />,
        errorElement: <ErrorElement />,
    },

    {
        path: "*",
        element: <Not_Found />,
    },
]);

export default routes;
