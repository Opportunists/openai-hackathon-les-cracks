import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/* Styles */
import "./index.css";

import { UseIt } from './pages/UseIt'
/* Pages */
import MainPage from './pages/MainPage'
import AboutPage from './pages/About';
import ErrorPage from './pages/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/start",
    element: <UseIt/>
  },
  {
    path: "/about",
    element: <AboutPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
