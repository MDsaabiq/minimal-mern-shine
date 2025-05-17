
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={18} />, url: "#", label: "GitHub" },
    { icon: <Twitter size={18} />, url: "#", label: "Twitter" },
    { icon: <Linkedin size={18} />, url: "#", label: "LinkedIn" },
    { icon: <Instagram size={18} />, url: "#", label: "Instagram" },
  ];

  return (
    <footer className="py-10 px-4 bg-[#08101e] text-portfolio-text border-t border-white/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <a 
              href="#home" 
              className="text-xl font-bold text-white hover:text-portfolio-accent transition-colors"
            >
              Portfolio<span className="text-portfolio-accent">.</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-4"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-portfolio-text hover:text-portfolio-accent transition-colors p-2 rounded-full bg-white/5 hover:bg-white/10"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 border-t border-white/5 pt-8 flex flex-col md:flex-row md:justify-between items-center"
        >
          <p className="text-sm text-portfolio-text/60 mb-4 md:mb-0">
            © {currentYear} John Doe. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-sm text-portfolio-text/60 hover:text-portfolio-accent transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-sm text-portfolio-text/60 hover:text-portfolio-accent transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
