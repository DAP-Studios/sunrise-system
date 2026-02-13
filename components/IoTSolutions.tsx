import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Database, Zap, Clock } from 'lucide-react';

const IoTSolutions: React.FC = () => {
  const features = [
    { icon: Wifi, title: "M2M Communication", desc: "Devices stay connected for total transparency." },
    { icon: Clock, title: "Save Time", desc: "Automate daily tasks and avoid human intervention." },
    { icon: Zap, title: "Save Money", desc: "Optimum utilization of energy and resources." },
    { icon: Database, title: "Information", desc: "More information helps making better decisions." }
  ];

  return (
    <section id="iot" className="relative py-20 md:py-32 bg-scroll md:bg-fixed bg-center bg-cover" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070')" }}>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-900/90"></div>
      
      {/* Digital Grid Effect */}
      <motion.div 
        animate={{ opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 z-0 opacity-10" 
        style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }}
      >
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center text-white">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">IOT BASED <span className="text-primary">SOLUTIONS</span></h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
                Physical objects getting connected and controlled digitally. M2M (Machine-to-Machine) communication for transparency and quality.
            </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                    className="bg-white/5 backdrop-blur-md border border-white/10 p-8 hover:bg-primary/90 transition-colors duration-300 group rounded-sm flex flex-col items-center"
                >
                    <div className="mb-6 p-4 bg-white/5 rounded-full group-hover:bg-white/20 transition-colors">
                        <item.icon size={32} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold uppercase mb-3 tracking-wide">{item.title}</h3>
                    <p className="text-sm text-slate-300 group-hover:text-white/90 leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-slate-400 text-sm max-w-3xl mx-auto italic border-l-2 border-primary pl-4 text-left"
        >
            <p>
                "The biggest advantage of IoT is saving money. If the price of the tagging and monitoring equipment is less than the amount of money saved, then the Internet of Things will be very widely adopted."
            </p>
        </motion.div>

      </div>
    </section>
  );
};

export default IoTSolutions;