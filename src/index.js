import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./Pages/Home/Home";
import { store } from "./Redux/store";
import LoginPage from "./Pages/Login/LoginPage";
import Footer from "./Pages/Footer/Footer";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        index
        path="/"
        element={
          <>
            <Home />
            <Footer />
          </>
        }
      />
    </Route>
  )
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
