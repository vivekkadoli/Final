
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Leaf, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const stats = [
    { icon: <Leaf className="h-8 w-8 text-accent" />, value: "100%", label: "Natural Products" },
    { icon: <ShieldCheck className="h-8 w-8 text-accent" />, value: "High Quality", label: "Guaranteed" },
    { icon: <Zap className="h-8 w-8 text-accent" />, value: "Fast Export", label: "Worldwide" },
  ];

  return (
    <section className="relative hero-gradient text-primary-foreground py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Premium Indian Turmeric & Herbs
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10">
            SWAMIKRUPA TRADERS: Your trusted source for the finest quality Turmeric Finger, Powder and Bulb exported worldwide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/products">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg w-full sm:w-auto">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
<Link to="/contact">
  <Button
    size="lg"
    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg w-full sm:w-auto"
  >
    Contact Us
  </Button>
</Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center shadow-lg hover:bg-white/20 transition-colors duration-300">
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
