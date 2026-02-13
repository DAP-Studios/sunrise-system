import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div 
        animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
            backgroundSize: '40px 40px' 
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
            <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-2">Our Capabilities</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">ENGINEERING <span className="text-primary">SERVICES</span></h2>
            <p className="text-slate-500 text-sm md:text-base">
                We deliver comprehensive industrial solutions designed to optimize your production and ensure safety across all operations.
            </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 rounded-sm overflow-hidden shadow-soft"
        >
          <img
            src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?q=80&w=2000&auto=format&fit=crop"
            alt="Industrial automation workspace"
            className="w-full h-48 sm:h-64 md:h-80 object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
            {SERVICES.map((item, idx) => (
                <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    className="bg-white p-8 border-b-4 border-transparent hover:border-primary transition-all duration-300 shadow-card hover:shadow-xl group rounded-sm"
                >
                    <div className="mb-6 text-slate-300 group-hover:text-primary transition-colors duration-300 transform group-hover:scale-110 origin-left">
                        <item.icon size={48} strokeWidth={1} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase">
                        {item.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">
                        {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {item.tags.map((tag, tIdx) => (
                            <span key={tIdx} className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a href="#contact" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-900 group-hover:text-primary transition-colors">
                        Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;