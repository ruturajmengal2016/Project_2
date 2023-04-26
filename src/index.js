import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/" element={<h1>Home</h1>} /> 
    <Route path="/login" element={<LoginPage/>}/> 
    <Route /> 
    <Route /> 
  </Route>
))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
