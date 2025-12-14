import { ErrorBoundary } from "@/shared/components";
import { ROUTES } from "@/shared/constants/routes.constants";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "./layout";

export const router = createBrowserRouter([
    {
        errorElement: <ErrorBoundary />,
        children: [
            {
                element: <Layout />,
                children: [
                    {
                        path: ROUTES.CANVAS,
                        lazy: () => import("@/features/canvas/canvas.page"),
                    },

                    {
                        path: "*",
                        element: <Navigate to={ROUTES.CANVAS} replace />,
                    },
                ],
            },
            {
                path: "*",
                element: <Navigate to={ROUTES.CANVAS} replace />,
            },
        ],
    },
]);
