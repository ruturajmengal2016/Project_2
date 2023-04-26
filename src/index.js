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
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route path="/" element={<h1>Home</h1>} /> 
    <Route path="/login" element={<h1>Sign In</h1>}/> 
    <Route /> 
    <Route /> 
  </Route>
))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
