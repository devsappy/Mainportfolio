'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link
    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaEnvelope, href: '#', label: 'Email' },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-dark via-dark-secondary to-dark -z-10" />
      <div className="fixed inset-0 opacity-30 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-center mb-8"
        >
          <span className="text-primary">{'//'}</span> Get In Touch
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-text-secondary text-lg mb-16"
        >
          I&apos;m always interested in new opportunities and collaborations
        </motion.p>

        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="form-field">
              <label htmlFor="name" className="block text-text-secondary mb-2 uppercase text-sm tracking-wider">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-card border border-primary/20 rounded-md text-text-primary focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all"
                placeholder="Your Name"
              />
            </div>
            
            <div className="form-field">
              <label htmlFor="email" className="block text-text-secondary mb-2 uppercase text-sm tracking-wider">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-dark-card border border-primary/20 rounded-md text-text-primary focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div className="form-field">
            <label htmlFor="subject" className="block text-text-secondary mb-2 uppercase text-sm tracking-wider">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-dark-card border border-primary/20 rounded-md text-text-primary focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all"
              placeholder="What&apos;s this about?"
            />
          </div>
          
          <div className="form-field">
            <label htmlFor="message" className="block text-text-secondary mb-2 uppercase text-sm tracking-wider">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-dark-card border border-primary/20 rounded-md text-text-primary focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all resize-none"
              placeholder="Your message here..."
            />
          </div>
          
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-white text-black font-bold rounded-md hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all uppercase tracking-wider disabled:opacity-50 hover:bg-gray-100"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-primary mb-6 uppercase tracking-wider">
            Connect With Me
          </h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-12 h-12 bg-dark-card border border-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-dark hover:border-primary transition-all"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}