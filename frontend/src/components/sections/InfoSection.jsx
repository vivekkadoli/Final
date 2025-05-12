import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Leaf, Award, Truck, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const InfoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            {/* <img
              className="rounded-lg shadow-xl w-full h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[900px] object-cover"
              alt="Close-up of vibrant turmeric powder and fresh turmeric roots"
              src="/TurmericPlant.jpg" // Updated to .jpg
              loading="lazy" // Lazy loading for performance
            /> */}
            <img
              className="rounded-lg shadow-xl w-full h-auto object-cover sm:max-h-[400px] md:max-h-[600px] lg:max-h-[900px]"
              alt="Close-up of vibrant turmeric powder and fresh turmeric roots"
              src="/TurmericPlant.jpg"
              loading="lazy"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 text-center md:text-left">
              Why Choose SWAMIKRUPA TRADERS?
            </h2>
            <p className="text-secondary-foreground mb-6 leading-relaxed text-center md:text-left">
              At SWAMIKRUPA TRADERS, we are dedicated to providing our global
              clientele with turmeric and herbal products of unparalleled
              quality. Our commitment extends from ethical sourcing to
              meticulous processing and reliable export services.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Leaf className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">
                    Authentic & Pure
                  </h4>
                  <p className="text-sm text-secondary-foreground">
                    Sourced directly from trusted farms, ensuring natural
                    goodness without additives.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">
                    Quality Assured
                  </h4>
                  <p className="text-sm text-secondary-foreground">
                    Rigorous quality checks at every stage to meet international
                    standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Truck className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-primary">
                    Reliable Export
                  </h4>
                  <p className="text-sm text-secondary-foreground">
                    Efficient logistics and timely delivery to your destination
                    worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center md:text-left">
              <Link to="/about">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3">
                  Learn More About Us <MessageCircle className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
