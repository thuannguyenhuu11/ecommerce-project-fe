import './App.css';
import { Outlet } from 'react-router';

function App() {
    return (
        <>
            <h1>Hello world</h1>
            <Outlet />
        </>
    );
}

export default App;
