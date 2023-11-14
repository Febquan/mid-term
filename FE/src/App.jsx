import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import LandingPage from "./pages/LandingPage";
import LoginSignUp from "./pages/Auth/LoginSignup";
function MyApp() {
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
