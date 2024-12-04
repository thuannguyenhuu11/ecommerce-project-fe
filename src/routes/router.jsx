import { createBrowserRouter } from 'react-router';
import App from '../App';
import Home from '@/pages/home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <h1>About page</h1>
            }
        ]
    }
]);

export default router;
