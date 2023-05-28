import {
    createBrowserRouter
} from "react-router-dom";
import HomePage from '../pages/Home';
import UpcomingPage from '../pages/Upcoming';
import SearchPage from '../pages/Search';
import NotFoundPage from '../pages/404'

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: "/upcoming",
        element: <UpcomingPage/>,
        errorElement: <NotFoundPage/>
    },
    {
        path: "/search",
        element: <SearchPage/>,
        errorElement: <NotFoundPage/>
    }
]);
export default router;