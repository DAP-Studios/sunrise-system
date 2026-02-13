import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../constants';
import { Plus } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white">
    <div className="container mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
                <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-2">Our Portfolio</h4>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">CUSTOM <span className="text-primary">PROJECTS</span></h2>
            </motion.div>
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="hidden md:block"
            >
                <a href="#contact" className="bg-slate-900 text-white px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-primary transition-colors rounded-sm">
                    Inquire Now
                </a>
            </motion.div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PRODUCTS.map((product, idx) => (
                <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="group relative overflow-hidden cursor-pointer rounded-sm shadow-md"
                >
                    
                    {/* Image */}
                    <div className="aspect-[4/3] w-full bg-slate-100">
                        <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-slate-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-center px-6">
                            <div className="w-12 h-12 border-2 border-primary text-primary rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary hover:text-white transition-colors">
                                <Plus size={24} />
                            </div>
                            <h3 className="text-white font-bold text-lg uppercase mb-1">{product.name}</h3>
                            <div className="h-0.5 w-8 bg-primary mx-auto my-3"></div>
                            <ul className="text-left space-y-1">
                                {product.specs.map((spec, sIdx) => (
                                    <li key={sIdx} className="text-slate-300 text-xs text-center">{spec}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <a href="#contact" className="inline-block bg-slate-900 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-primary transition-colors rounded-sm">
                Inquire Now
            </a>
        </div>

      </div>
    </section>
  );
};

export default Products;