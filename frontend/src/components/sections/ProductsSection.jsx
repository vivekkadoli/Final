
import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const products = [
  {
    name: "Turmeric Powder",
    scientificName: "Curcuma Longa",
    form: "Powder",
    description: "Premium quality turmeric powder with high curcumin content, ideal for culinary and medicinal uses. Sourced from the best farms.",
    imageAlt: "Pile of golden turmeric powder"
  },
  {
    name: "Turmeric Finger",
    scientificName: "Curcuma Longa",
    form: "Whole",
    description: "Organic turmeric fingers, carefully selected and dried to preserve their natural oils and potent flavor. Perfect for grinding fresh.",
    imageAlt: "Several dried turmeric fingers"
  },
  {
    name: "Turmeric Bulb",
    scientificName: "Curcuma Longa",
    form: "Bulb/Rhizome",
    description: "Fresh turmeric bulbs, also known as rhizomes. Excellent for planting or using fresh in culinary dishes for a vibrant taste.",
    imageAlt: "Fresh turmeric bulbs with roots"
  }
];

const ProductsSection = ({ isPage }) => {
  return (
    <section className={`py-12 md:py-16 ${isPage ? 'bg-background' : 'bg-secondary'}`}>
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {isPage ? "Our Premium Turmeric Products" : "Our Range Of Products"}
          </h2>
          <p className="text-secondary-foreground max-w-3xl mx-auto">
            We specialize in providing the finest quality Turmeric Finger, Turmeric Powder, and Turmeric Bulb, sourced directly from trusted growers.
          </p>
        </motion.div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${products.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8 justify-center`}>
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="product-card bg-background rounded-lg overflow-hidden shadow-lg flex flex-col max-w-md mx-auto sm:mx-0 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                {index === 0 && <img  class="w-full h-full object-cover" alt={product.imageAlt} src="/TurmericPowder.png" />}
                {index === 1 && <img  class="w-full h-full object-cover" alt={product.imageAlt} src="/TurmericFinger.png" />}
                {index === 2 && <img  class="w-full h-full object-cover" alt={product.imageAlt} src="/TurmericBulb.png" />}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-primary mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">Scientific Name: <i>{product.scientificName}</i></p>
                <p className="text-sm text-muted-foreground mb-3">Form: {product.form}</p>
                <p className="text-base text-foreground flex-grow leading-relaxed">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
