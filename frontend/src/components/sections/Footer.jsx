import React from "react";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = ({ logoUrl }) => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  const productCategories = [
    "Turmeric Powder",
    "Turmeric Finger",
    "Turmeric Bulb",
  ];

  const whatsappNumber = "917066378525";
  const whatsappMessage = encodeURIComponent(
    "Hello SWAMIKRUPA TRADERS, I'm interested in your products."
  );
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const whatsappLink = isMobile
    ? `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`
    : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`;

  return (
    <footer className="footer-background">
      <div className="footer-content">
        <div className="footer-section footer-section-main">
          {logoUrl && <img src={logoUrl} alt="Logo" className="footer-logo" />}
          <p className="footer-description">
            SWAMIKRUPA TRADERS is a trusted supplier of premium turmeric
            products, committed to quality and customer satisfaction.
          </p>
          <div className="footer-social-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg"
                alt="WhatsApp"
                style={{ width: 28, height: 28, filter: "invert(1)" }}
              />
            </a>
            <a
              href="https://www.facebook.com/people/Swamikrupa-Traders/61574741791675/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon"
              aria-label="Facebook"
            >
              <Facebook size={28} color="#fff" />
            </a>
          </div>
        </div>
        <div className="footer-section footer-quick-links">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Products</h4>
          <ul className="footer-products">
            {productCategories.map((product) => (
              <li key={product}>{product}</li>
            ))}
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="footer-contact">
            <li>
              <Phone size={18} />{" "}
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                +91 70663 78525 (WhatsApp)
              </a>
            </li>
            <li>
              <Mail size={18} />{" "}
              <a href="mailto:swamikrupatraders@gmail.com">
                swamikrupatraders@gmail.com
              </a>
            </li>
            <li>
              <MapPin size={18} /> Branch Post Office, A/p shirol, Shirol, Maharashtra 416103
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} SWAMIKRUPA TRADERS. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;