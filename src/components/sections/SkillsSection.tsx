
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: 'React', level: 95, color: '#61DAFB' },
    { name: 'Next.js', level: 90, color: '#000000' },
    { name: 'TypeScript', level: 88, color: '#3178C6' },
    { name: 'Node.js', level: 85, color: '#339933' },
    { name: 'Express.js', level: 82, color: '#000000' },
    { name: 'MongoDB', level: 80, color: '#47A248' },
    { name: 'PostgreSQL', level: 78, color: '#336791' },
    { name: 'AWS', level: 75, color: '#FF9900' },
  ];

  const techs = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript',
    'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL',
    'GitHub', 'AWS', 'DevOps'
  ];

  return (
    <section id="skills" ref={ref} className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-8 gradient-text">Technical Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-3 rounded-full glow"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-8 gradient-text">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {techs.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800 hover:bg-gray-700 p-4 rounded-lg text-center transition-all duration-300 border border-gray-600 hover:border-primary"
                >
                  <span className="text-white font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
