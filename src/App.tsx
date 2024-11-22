import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeLayout from './layouts/HomeLayout';
import Landing from './features/home/components/Landing/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
