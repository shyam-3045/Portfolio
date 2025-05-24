
import { motion } from 'framer-motion';

const TechIcons = () => {
  const techs = [
    { 
      name: "React", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB" 
    },
    { 
      name: "Next.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "#000000" 
    },
    { 
      name: "TypeScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6" 
    },
    { 
      name: "Node.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933" 
    },
    { 
      name: "MongoDB", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248" 
    },
    { 
      name: "AWS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      color: "#FF9900" 
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
      {techs.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.1, y: -10 }}
          className="flex flex-col items-center group"
        >
          <div className="glass rounded-xl p-4 mb-3 transition-all duration-300 group-hover:glow">
            <img 
              src={tech.icon} 
              alt={tech.name}
              className="w-12 h-12 filter brightness-0 invert group-hover:filter-none transition-all duration-300"
            />
          </div>
          <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default TechIcons;
