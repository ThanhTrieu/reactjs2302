/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import SpinMovies from "../components/commons/Spin";


const HomePage     = lazy(() => import('../pages/Home'));
const UpcomingPage = lazy(() => import('../pages/Upcoming')) ;
const SearchPage   = lazy(() => import('../pages/Search'));
const NotFoundPage = lazy(() => import('../pages/404'));
const DetailPage   = lazy(() => import('../pages/Detail'));
const LoginPage    = lazy(() => import('../pages/Login'));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<SpinMovies/>}>
                <HomePage/>
            </Suspense>
        ),
        errorElement: <NotFoundPage/>
    },
    {
        path: "/upcoming",
        element: (
            <Suspense fallback={<SpinMovies/>}>
                <UpcomingPage/>
            </Suspense>
        ),
        errorElement: <NotFoundPage/>
    },
    {
        path: "/search",
        element: (
            <Suspense fallback={<SpinMovies/>}>
                <SearchPage/>
            </Suspense>
        ),
        errorElement: <NotFoundPage/>
    },
    {
        // localhost:1537/movie/qua-nhanh-qua-nguy-hiem/1234
        // :slug va :id goi la tham so truyen len url (co the thay doi gia tri duoc)
        path: "/movie/:slug/:id",
        element: (
            <Suspense fallback={<SpinMovies/>}>
                <DetailPage/>
            </Suspense>
        ),
        errorElement: <NotFoundPage/>
    },
    {
        path: '/login',
        element:(
            <Suspense fallback={<SpinMovies/>}>
                <LoginPage/>
            </Suspense>
        ),
        errorElement: <NotFoundPage/>
    }
]);
export default router;