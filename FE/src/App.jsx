import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage";
import LoginSignUp from "./pages/Auth/LoginSignup";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import api from "./axios/axios";

import { useDispatch } from "react-redux";
import { loginSetState } from "./store/authSlice";
function MyApp() {
  const dispatch = useDispatch();
  const autoLogin = async () => {
    try {
      const res = await api.get("user/autologin");

      return res.data.userInfo;
    } catch (err) {
      console.log(err);
    }
  };
  const { isSuccess } = useQuery({
    queryKey: ["userInfo"],
    queryFn: autoLogin,

    onError: () => {
      alert("Phiên làm việc hết hạn");
    },
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(loginSetState());
    }
  }, [isSuccess, dispatch]);
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Login" element={<LoginSignUp />} />
            <Route path="Landingpage" element={<LandingPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default MyApp;
