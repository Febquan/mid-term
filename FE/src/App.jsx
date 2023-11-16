import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./pages/auth1/PrivateRoute";
import Layout from "./pages/Layout";
import Home from "./pages/home/Home";
import Info from "./pages/settings/Info";
import LandingPage from "./pages/LandingPage";
import LoginSignUp from "./pages/auth1/LoginSignup";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import api from "./axios/axios";

import { useDispatch } from "react-redux";
import { loginSetState } from "./store/authSlice";
function MyApp() {
  const dispatch = useDispatch();
  const [autoLoginDataReady, setAutoLoginDataReady] = useState(false);
  const [isNotLogin, setIsNotLogin] = useState(false);
  const autoLogin = async () => {
    try {
      const res = await api.get("user/autologin");

      return res.data.userInfo;
    } catch (err) {
      console.log(err);
    }
  };
  const { isSuccess, isError } = useQuery({
    queryKey: ["userInfo"],
    queryFn: autoLogin,
    // Set to false to stop automatic refetching
  });
  console.log(isSuccess);
  useEffect(() => {
    if (isSuccess) {
      dispatch(loginSetState());
      setAutoLoginDataReady(true);
    }
    if (isError) {
      setIsNotLogin(true);
    }
  }, [isSuccess, dispatch, isError]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          <Route path="Login" element={<LoginSignUp />} />
          <Route
            path="Info"
            element={
              autoLoginDataReady && (
                <PrivateRoute>
                  <Layout>
                    <Info />
                  </Layout>
                </PrivateRoute>
              )
            }
          />

          <Route
            path="Landingpage"
            element={
              <Layout>
                <LandingPage />
              </Layout>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MyApp;
