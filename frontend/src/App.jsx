
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProductsPage from "@/pages/ProductsPage";
import ContactPage from "@/pages/ContactPage";

const App = () => {
  const logoUrl = "/80a6dba0e3285c0c2ebfac1c9353f82c-removebg-preview.png";

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar logoUrl={logoUrl} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer logoUrl={logoUrl} />
        <Toaster />
      </div>
    </Router>
  );
};

export default App;
