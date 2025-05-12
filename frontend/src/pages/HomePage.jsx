
import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import InfoSection from "@/components/sections/InfoSection";
import ContactSection from "@/components/sections/ContactSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <InfoSection />
      <ContactSection isPage={false} />
    </>
  );
};

export default HomePage;
