import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddFilm from './pages/AddFilm';
import Movies from './pages/Movies';
import Homepage from './pages/Homepage';



const router = createBrowserRouter([
   {
  path: "/",
  element: <App />,
  
  children: [

    {
      path: "/",
      element: <Homepage />
      },

    {
    path: "/Movies",
    element: <Movies />
    },

    {
      path: "/AddFilm",
      element: <AddFilm />
      },
  ]
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
