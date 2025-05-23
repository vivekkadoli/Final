import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ChevronRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  "Premium Turmeric Finger",
  "High-Curcumin Turmeric Powder",
  "Quality Turmeric Bulb",
  "Custom Private Label Packaging",
  "Efficient Export & Logistics Solutions",
  "Rigorous Quality Assurance",
];

const ContactSection = ({ isPage }) => {
  const whatsappNumber = "917066378525";
  const whatsappMessage = encodeURIComponent(
    "Hello SWAMIKRUPA TRADERS, I'm interested in your products."
  );

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const whatsappLink = isMobile
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;

  const [phone, setPhone] = useState("");

  const handleContactSubmit = (e) => {
    e.preventDefault();
    window.open(whatsappLink, "_blank");
  };

  return (
    <section
      className={`relative py-12 md:py-16 ${
        isPage
          ? "bg-[url('/turmeric-bg.png')] bg-cover bg-center bg-no-repeat bg-fixed text-primary-foreground"
          : "bg-secondary"
      }`}
    >
      {isPage && (
        <div className="absolute inset-0 bg-black/60 z-0"></div>
      )}

      <div className="relative z-10 container mx-auto px-4">
        {isPage && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              We're here to help with all your turmeric and herbal product
              needs. Reach out to us today!
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1 bg-card p-6 md:p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Our Office</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">Phone</h4>
                  <a
                    href="tel:+917066378525"
                    className="text-secondary-foreground hover:text-primary"
                  >
                    +91 7066378525
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">Email</h4>
                  <a
                    href="mailto:swamikrupatraders8841@gmail.com"
                    className="text-secondary-foreground hover:text-primary"
                  >
                    swamikrupatraders8841@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <img
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  className="h-6 w-6 mr-3 mt-1 flex-shrink-0"
                  style={{ display: "inline-block", verticalAlign: "middle" }}
                />
                <div>
                  <h4 className="font-semibold text-primary">WhatsApp</h4>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-foreground hover:text-primary"
                  >
                    Chat with us
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-bold text-primary mb-3">
                Business Hours
              </h4>
              <p className="text-secondary-foreground">
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-secondary-foreground">
                Saturday: 10:00 AM - 4:00 PM
              </p>
              <p className="text-secondary-foreground">Sunday: Closed</p>
            </div>
          </motion.div>

          {isPage ? (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2 bg-card p-6 md:p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-input rounded-md focus:ring-primary focus:border-primary shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-input rounded-md focus:ring-primary focus:border-primary shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">
                    Phone Number (Optional)
                  </label>
                  
                  <PhoneInput
                    country={"in"}
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    inputClass="w-full px-4 py-2 border border-input rounded-md focus:ring-primary focus:border-primary shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    required
                    className="w-full px-4 py-2 border border-input rounded-md focus:ring-primary focus:border-primary shadow-sm"
                  ></textarea>
                </div>
                <div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
                    Send Message & Chat on WhatsApp
                  </Button>
                </div>
              </form>
            </motion.div>
          ) : (
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="info-section-highlight p-6 md:p-8 rounded-lg text-primary-foreground flex flex-col justify-center shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">Swamikrupa Traders</h3>
                <p className="mb-6">Your Gateway to Reliable Exports</p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                    <p>+91 7066378525</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                    <p>swamikrupatraders8841@gmail.com</p>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-3 flex-shrink-0" />
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card p-6 md:p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-bold text-primary mb-6">Our Services</h3>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center">
                      <ChevronRight className="h-5 w-5 text-accent flex-shrink-0" />
                      <p className="ml-2 text-secondary-foreground">{service}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <blockquote className="italic text-secondary-foreground border-l-4 border-accent pl-4 py-2">
                    "Rooted in Tradition, Driven by Quality"
                  </blockquote>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
