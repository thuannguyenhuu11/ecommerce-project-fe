import { createBrowserRouter } from 'react-router';
import App from '../App';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <h1>Home page</h1>
            },
            {
                path: '/about',
                element: <h1>About page</h1>
            }
        ]
    }
]);

export default router;
