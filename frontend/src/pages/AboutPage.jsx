
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, ShieldCheck, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center mb-12 md:mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">About SWAMIKRUPA TRADERS</h1>
        <p className="text-lg md:text-xl text-secondary-foreground max-w-3xl mx-auto">
          Your trusted partner in sourcing premium quality turmeric products directly from India.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-12 md:mb-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <img  class="rounded-lg shadow-xl w-full h-auto object-cover" alt="Team discussing turmeric products" src="https://images.unsplash.com/photo-1697593176326-6a466e4c4157" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">Our Story</h2>
          <p className="text-secondary-foreground mb-4 leading-relaxed">
            SWAMIKRUPA TRADERS was founded with a simple mission: to bring the authentic goodness of Indian turmeric to the global market. We are deeply rooted in the agricultural traditions of India, working closely with local farmers to ensure the highest quality produce.
          </p>
          <p className="text-secondary-foreground leading-relaxed">
            Our commitment to quality, sustainability, and fair trade practices is at the heart of everything we do. We believe in building long-lasting relationships with our clients based on trust and mutual respect.
          </p>
        </motion.div>
      </div>

      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-12 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center mb-8">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <ShieldCheck className="w-10 h-10 text-accent mb-3" />, title: "Quality First", description: "We never compromise on the quality of our products, ensuring purity and potency." },
            { icon: <Users className="w-10 h-10 text-accent mb-3" />, title: "Farmer Partnerships", description: "We work directly with farmers, promoting fair prices and sustainable agriculture." },
            { icon: <Target className="w-10 h-10 text-accent mb-3" />, title: "Customer Focus", description: "Our clients' satisfaction is our top priority. We strive to exceed expectations." },
            { icon: <Globe className="w-10 h-10 text-accent mb-3" />, title: "Global Reach", description: "Connecting the richness of Indian herbs with the world, one shipment at a time." },
          ].map((value, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary p-6 rounded-lg shadow-md text-center"
            >
              {value.icon}
              <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
              <p className="text-secondary-foreground text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeIn}
        className="text-center bg-primary text-primary-foreground p-8 md:p-12 rounded-lg shadow-xl"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Join Us on Our Journey</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          We are passionate about what we do and invite you to experience the difference that quality and dedication make. Explore our range of products and let us be your trusted source for authentic Indian turmeric.
        </p>
        <Link to="/contact">
          <Button variant="secondary" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Get in Touch
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutPage;
