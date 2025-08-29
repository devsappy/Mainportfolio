'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Using mailto as a simple solution
    const subject = `New message from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:saph.6869@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Simulate success after a short delay
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/devsappy',
      icon: '👾',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saptarshi-chattopadhyay-05380622b/',
      icon: '💼',
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Saptars40839364',
      icon: '🐦',
    },
    {
      name: 'Email',
      url: 'mailto:saph.6869@gmail.com',
      icon: '📧',
    },
  ];

  return (
    <section id="contact" className="min-h-screen relative">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-dark via-dark-secondary to-dark -z-10" />
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-1/4 right-1/6 w-56 h-56 bg-accent/3 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/6 w-64 h-64 bg-primary/4 rounded-full blur-3xl animate-float-reverse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-center mb-8"
        >
          <span className="text-primary">{'//'}</span> Get In Touch
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-blue-400 text-lg mb-16 max-w-2xl mx-auto"
        >
          Let's collaborate and bring your ideas to life. I'm always excited to work on new projects and challenges.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-dark-card/50 backdrop-blur-sm border border-primary/10 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-blue-400 text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-secondary/50 border border-primary/20 rounded-md text-white placeholder-text-cyan-400/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-blue-400 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-secondary/50 border border-primary/20 rounded-md text-white placeholder-text-cyan-400/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-blue-400 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-secondary/50 border border-primary/20 rounded-md text-white placeholder-text-cyan-400/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-3 font-semibold rounded-md transition-all duration-300 transform uppercase tracking-wider ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                    : 'bg-gray-100/90 text-gray-900 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1 hover:bg-white/90'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-center font-medium"
                >
                  ✅ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-center font-medium"
                >
                  ❌ Failed to send message. Please try again or email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-dark-card/50 backdrop-blur-sm border border-primary/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">Connect With Me</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Location</h4>
                  <p className="text-blue-400">Available Worldwide (Remote)</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Response Time</h4>
                  <p className="text-blue-400">Usually within 24 hours</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Availability</h4>
                  <p className="text-blue-400">Open for freelance projects</p>
                </div>
              </div>
            </div>

            <div className="bg-dark-card/50 backdrop-blur-sm border border-primary/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-dark-secondary/50 border border-accent/20 rounded-md hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-all duration-300 group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">
                      {link.icon}
                    </span>
                    <span className="text-blue-400 group-hover:text-accent transition-colors">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-8 border-t border-primary/20 text-center"
        >
          <p className="text-blue-400">
            © 2024 Sappy. Built with Next.js, Tailwind CSS, and lots of ☕
          </p>
        </motion.div>
      </div>
    </section>
  );
}