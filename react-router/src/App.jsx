import { BrowserRouter, Routes, Route } from "react-router-dom";

// Le mie pagine
import HomePage from "./pages/HomePage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import PageNotFound from "./pages/PageNotFound";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route index element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
