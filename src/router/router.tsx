import { createBrowserRouter } from "react-router-dom";
import { WeatherPage } from "../pages/WeatherPage";
import { WeatherPronosticPage } from '../pages/WeatherPronosticPage';
import { ErrorPage } from '../pages/ErrorPage';

import App from "../App";
import { WeatherCardPage } from "../pages/WeatherCardPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <WeatherCardPage />
            },
            {
                path: "/buscar",
                element: <WeatherPage />
            },
            {
                path: "/p",
                element: <WeatherPronosticPage />
            },
            {
                path: "*",
                element: <ErrorPage />
            }
        ],
    },
    {
        
    }
]);
