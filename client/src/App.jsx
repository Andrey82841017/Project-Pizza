import "./App.css";
import Root from "./Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import { useState, useEffect } from "react";
import axiosInstance, { setAccessToken } from "./axiosInstance";

import ProtectedRoute from "./ProtectedRoute";
import RestoranPage from "./pages/RestoranPage/RestoranPage";

function App() {
  const [user, setUser] = useState({});
  const [restaurants, setRestaurants] =useState()

  useEffect(() => {
    axiosInstance
      .get(`${import.meta.env.VITE_API}/tokens/refresh`)
      .then((res) => {
        setUser(res.data.user);
        setAccessToken(res.data.accessToken);
      });
  }, []);
  useEffect(() => {
    fetch('https://private-anon-30e145911b-pizzaapp.apiary-mock.com/restaurants/')
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
      
      })
      .catch((err) => console.log(err));
    }, []);
    
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root user={user} setUser={setUser} restaurants={restaurants} />,
      children: [
        {
          path: "/",
          element: <HomePage user={user} />,
        },
        {
          path: "/signin",
          element: (
            <ProtectedRoute authUser={user.username} redirectTo={"/"}>
              <SigninPage setUser={setUser} />
            </ProtectedRoute>
          ),
        },
        {
          path: "/signup",
          element: (
            <ProtectedRoute authUser={user.username} redirectTo={"/"}>
              <SignupPage setUser={setUser} />
            </ProtectedRoute>
          ),
        },
        {
          path: "/restoran/:id",
          element: <RestoranPage user={user} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
