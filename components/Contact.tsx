import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            setIsSubmitting(true);
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitSuccess(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setSubmitSuccess(false), 5000);
            }, 1000);
        }
    };

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50 overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
                    className="grid lg:grid-cols-2 gap-6 lg:gap-0 shadow-2xl rounded-sm overflow-hidden"
        >
            
            {/* Left Info Panel */}
            <div className="bg-slate-900 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
                <div className="relative z-10">
                    <h4 className="text-primary font-bold uppercase tracking-widest text-xs md:text-sm mb-2">Contact Us</h4>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase">Let's Start Your Project</h2>
                    
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h5 className="font-bold uppercase text-xs text-slate-400 mb-1 tracking-wider">Mobile No</h5>
                                <p className="text-lg md:text-xl font-medium">+91 97129 58901</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h5 className="font-bold uppercase text-xs text-slate-400 mb-1 tracking-wider">Email</h5>
                                <p className="text-lg md:text-xl font-medium break-all">sunrisesys.service@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-white/10 p-3 rounded text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h5 className="font-bold uppercase text-xs text-slate-400 mb-1 tracking-wider">Office Address</h5>
                                <p className="text-base md:text-lg font-medium leading-snug">
                                    27, 2nd Floor, Pramukh Commercial Complex,<br/>
                                    Nr. Cine Park, Vapi Silvassa Road,<br/>
                                    Vapi – 396195
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 rounded-sm overflow-hidden border border-white/10">
                        <img
                          src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop"
                          alt="Engineering team meeting"
                          className="w-full h-40 sm:h-48 object-cover"
                          loading="lazy"
                        />
                    </div>
                </div>
                
                {/* Background Decor */}
                <div className="absolute -top-20 -right-20 opacity-10 animate-float">
                    <svg width="300" height="300" viewBox="0 0 100 100">
                        <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                    </svg>
                </div>
            </div>

            {/* Right Form Panel */}
            <div className="bg-white p-8 md:p-12 lg:p-16">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase">Send an Inquiry</h3>
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name *" 
                                className={`w-full bg-slate-50 border p-4 text-sm focus:outline-none transition-colors rounded-sm ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-primary'}`} 
                            />
                            {errors.name && (
                                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                    <AlertCircle size={12} /> {errors.name}
                                </p>
                            )}
                        </div>
                        <div>
                            <input 
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email *" 
                                className={`w-full bg-slate-50 border p-4 text-sm focus:outline-none transition-colors rounded-sm ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-primary'}`} 
                            />
                            {errors.email && (
                                <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                    <AlertCircle size={12} /> {errors.email}
                                </p>
                            )}
                        </div>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject" 
                            className="w-full bg-slate-50 border border-slate-200 p-4 text-sm focus:border-primary outline-none transition-colors rounded-sm" 
                        />
                    </div>
                    <div>
                        <textarea 
                            rows={4} 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message *" 
                            className={`w-full bg-slate-50 border p-4 text-sm focus:outline-none transition-colors rounded-sm ${errors.message ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-primary'}`}
                        ></textarea>
                        {errors.message && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                <AlertCircle size={12} /> {errors.message}
                            </p>
                        )}
                    </div>
                    
                    <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`bg-primary text-white font-bold uppercase tracking-widest px-8 py-4 text-sm hover:bg-slate-900 transition-colors flex items-center gap-2 rounded-sm ${isSubmitting ? 'opacity-75 cursor-wait' : ''}`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowRight size={16} />
                    </button>

                    {submitSuccess && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="bg-green-50 text-green-700 border border-green-200 p-4 flex items-center gap-2 rounded-sm text-sm"
                        >
                            <CheckCircle2 size={20} className="shrink-0" />
                            <span>Message sent successfully! We will contact you shortly.</span>
                        </motion.div>
                    )}
                </form>
            </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;