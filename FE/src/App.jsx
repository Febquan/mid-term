import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
function MyApp() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Landingpage" element={<LandingPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default MyApp;
