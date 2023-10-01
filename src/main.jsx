import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import AuthContext from './AuthContext/AuthContext'
import './index.css'
import myRoute from './MainLayout/MainLayout'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={myRoute}></RouterProvider>
    </AuthContext>
  </React.StrictMode>
);
