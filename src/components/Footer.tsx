import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = 'mailto:sajawalali7886@gmail.com?subject=Hello%20Sajawal&body=Hi%20Sajawal,%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out...';
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/jawal7886' , target: '_blank', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/feed/', target: '_blank', label: 'LinkedIn' },
    { icon: Mail, href: '#', onClick: handleEmailClick, label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-gray-900/50 backdrop-blur-sm border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand and Description */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Sajawal Nazir
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 leading-relaxed"
            >
              Software Developer passionate about creating innovative web solutions 
              and building user-friendly applications with modern technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  onClick={social.onClick}
                  target={social.target}
                  className="p-2 bg-gray-800/50 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-700/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold text-white"
            >
              Quick Links
            </motion.h3>
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              {quickLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                  whileHover={{ x: 4 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-lg font-semibold text-white"
            >
              Get In Touch
            </motion.h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="text-gray-400">
                <p className="font-medium text-gray-300">Email</p>
                <a 
                  href="#"
                  onClick={handleEmailClick}
                  className="hover:text-blue-400 transition-colors"
                >
                  sajawalali7886@gmail.com
                </a>
              </div>
              <div className="text-gray-400">
                <p className="font-medium text-gray-300">Location</p>
                <p>Lahore, Pakistan</p>
              </div>
              <div className="text-gray-400">
                <p className="font-medium text-gray-300">Availability</p>
                <p>Open to opportunities</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© {currentYear} Sajawal Nazir. Made with</span>
            <Heart size={16} className="text-red-500" fill="currentColor" />
            <span>and lots of ☕</span>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 text-gray-400 rounded-lg hover:text-blue-400 hover:bg-gray-700/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={16} />
            <span className="text-sm">Back to top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;