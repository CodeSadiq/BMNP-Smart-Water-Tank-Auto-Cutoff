import { Routes, Route } from "react-router-dom";
import FloatingSocial from "./components/ui/FloatingSocial";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import BuyNow from "./pages/BuyNow";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<BuyNow />} />
      </Routes>
      <FloatingSocial />
      <Footer />
    </>
  );
}
