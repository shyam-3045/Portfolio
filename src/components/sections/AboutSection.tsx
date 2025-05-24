
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience building 
                scalable web applications. I love turning complex problems into simple, 
                beautiful designs. When I'm not coding, you'll find me exploring new 
                technologies or contributing to open-source projects.
              </p>
            </div>
            
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">What I Do</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Full-stack web development</li>
                <li>• Cloud architecture & DevOps</li>
                <li>• UI/UX design implementation</li>
                <li>• Database design & optimization</li>
                <li>• API development & integration</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-400">Location</span>
                <span className="text-white">San Francisco, CA</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-400">Experience</span>
                <span className="text-white">5+ Years</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <span className="text-gray-400">Availability</span>
                <span className="text-green-400">Open to work</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400">Preferred Stack</span>
                <span className="text-white">React, Node.js, AWS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
