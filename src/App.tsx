import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from './Pages/Root';
import { Home } from './Pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/students", element: <Students /> },
      // { path: "/students/:id", element: <Student /> },
      // { path: "/staff", element: <Staff /> },
      // { path: "/staff/:id", element: <IndividualStaff /> },
      // { path: "/feeConfiguration", element: <FeeConfiguration /> },
      // // { path: "/feeCollection", element: <FeeCollection/>},
      // { path: "/feeCollection/:id", element: <FeeCollectionDetails /> }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
