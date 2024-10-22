import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from "./routes/HomePage/HomePage"
import DashboardPage from './routes/DashboardPage/DashboardPage';
import ChatPage from './routes/ChatPage/ChatPage'
import RootLayout from './layouts/RootLayout/RootLayout';
import DashboardLayout from './layouts/DashboardLayout/DashboardLayout';




const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children:[
      {
        path:"/",
        element: <HomePage />,
      },
      {
        element: <DashboardLayout />,
        children:[
          {
            path:"/dashboard",
            element:<DashboardPage />
          },
          {
            path:"/dashboard/chats/:id",
            element:<ChatPage />,
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
