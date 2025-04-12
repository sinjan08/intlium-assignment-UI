import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'devextreme/dist/css/dx.light.css';
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';

import CircleLoader from './components/Spinners/CircleLoader';
import Register from './pages/Register';
const Home = lazy(() => import('./pages/Home'));
const Drive = lazy(() => import('./pages/Drive'));

function App() {

  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Suspense fallback={<CircleLoader />}>
        <Home />
      </Suspense>
    },
    {
      path: "/register",
      element: <Suspense fallback={<CircleLoader />}>
        <Register />
      </Suspense>
    },
    {
      path: "/drive",
      element: <Suspense fallback={<CircleLoader />}>
        <Drive />
      </Suspense>
    }
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
