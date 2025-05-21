import React from "react";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = ({ logoUrl }) => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  const productCategories = [
    { name: "Turmeric Powder", path: "/products" },
    { name: "Turmeric Finger", path: "/products" },
    { name: "Turmeric Bulb", path: "/products" },
  ];

  const whatsappNumber = "917066378525";
  const whatsappMessage = encodeURIComponent("Hello SWAMIKRUPA TRADERS, I'm interested in your products.");

  // Device-aware WhatsApp link
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const whatsappLink = isMobile
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;

  return (
    <footer className="footer text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            {logoUrl && (
              <Link to="/" className="inline-block mb-4">
                <img src={logoUrl} alt="SWAMIKRUPA TRADERS Logo" className="h-12" />
              </Link>
            )}
            <h4 className="text-xl font-bold text-white mb-2">SWAMIKRUPA TRADERS</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Leading supplier and exporter of premium Turmeric and Herbal Products from India.
            </p>
            <div className="flex space-x-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <img
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  className="h-6 w-6"
                  style={{ display: "inline-block", verticalAlign: "middle" }}
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-white hover:underline">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Products</h4>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link to={category.path} className="text-gray-400 hover:text-white hover:underline">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+917066378525" className="ml-2 text-gray-400 hover:text-white">+91 7066378525</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:swamikrupatraders8841@gmail.com" className="ml-2 text-gray-400 hover:text-white">swamikrupatraders8841@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SWAMIKRUPA TRADERS. All Rights Reserved.</p>
          <p className="mt-1">Designed with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;