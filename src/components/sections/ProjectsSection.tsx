
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
  title: "E-Commerce Platform",
  image: "/goldfinch.png",
  description: "Full-stack e-commerce platform with secure checkout and admin panel.",
  highlights: [
    "RazoPay-powered payment gateway",
    "Product management dashboard",
    "Mobile-first responsive UI"
  ],
  tech: ["React.js", "Node.js", "MongoDB"],
  demo: "https://www.goldfinchteas.com/",
  github: "https://github.com/shyam-3045/GoldFinch"
},
    // {
    //   title: 'Social Media Dashboard',
    //   description: 'Analytics dashboard for social media management with real-time data visualization and automated reporting.',
    //   tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
    //   image: '/placeholder.svg',
    //   demo: '#',
    //   github: '#',
    // },
    // {
    //   title: 'Task Management App',
    //   description: 'Collaborative project management tool with real-time updates, file sharing, and team communication features.',
    //   tech: ['React', 'Express.js', 'Socket.io', 'Redis'],
    //   image: '/placeholder.svg',
    //   demo: '#',
    //   github: '#',
    // },
  ];

  return (
    <section id="projects" ref={ref} className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Some of my recent work that I'm proud of
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project, index) => (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="glass rounded-2xl overflow-hidden group hover:glow transition-all duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Short description */}
        <p className="text-gray-400 mb-3 leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Highlighted bullet points */}
        {project.highlights && (
          <ul className="text-gray-400 text-sm mb-4 space-y-1 list-disc list-inside">
            {project.highlights.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-primary hover:bg-primary/80 text-white py-2 px-4 rounded-lg text-center transition-colors duration-300"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-gray-600 hover:border-primary text-gray-300 hover:text-white py-2 px-4 rounded-lg text-center transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default ProjectsSection;
