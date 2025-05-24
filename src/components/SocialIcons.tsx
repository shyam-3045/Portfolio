
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const SocialIcons = () => {
  const socials = [
    { 
      name: "GitHub", 
      icon: Github, 
      href: "https://github.com", 
      color: "#333" 
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      href: "https://linkedin.com", 
      color: "#0077B5" 
    },
    { 
      name: "Twitter", 
      icon: Twitter, 
      href: "https://twitter.com", 
      color: "#1DA1F2" 
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      href: "https://instagram.com", 
      color: "#E4405F" 
    },
  ];

  return (
    <div className="flex space-x-4 justify-center">
      {socials.map((social, index) => {
        const IconComponent = social.icon;
        return (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.2, y: -5 }}
            className="glass rounded-full p-3 transition-all duration-300 hover:glow group"
            style={{ '--hover-color': social.color } as any}
          >
            <IconComponent 
              size={24} 
              className="text-gray-400 group-hover:text-white transition-colors" 
            />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
