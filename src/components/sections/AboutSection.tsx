
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
  <h3 className="text-2xl font-semibold mb-4 gradient-text">Who I Am</h3>
  <p className="text-gray-300 leading-relaxed text-lg">
    I'm a <span className="text-white font-semibold">passionate full-stack developer</span> and 
    <span className="text-white font-semibold"> digital builder</span> with real-world experience 
    crafting <span className="text-primary">modern, scalable web applications</span>. My core expertise includes 
    <span className="text-white font-semibold"> React, Next.js, Node.js, and TypeScript</span>, with growing interest in 
    <span className="text-white font-semibold"> cloud infrastructure and DevOps practices</span>. I thrive on turning 
    ideas into <span className="text-primary">user-focused, performance-driven solutions</span> that solve real business problems. 
    Whether it's building <span className="text-white font-semibold">responsive UIs</span>, developing 
    <span className="text-white font-semibold"> robust backend APIs</span>, or learning to integrate 
    <span className="text-white font-semibold"> cloud workflows</span>, I approach full-stack development with 
    a strong focus on <span className="text-primary">clean code, real-world scalability,</span> and 
    <span className="text-primary"> maintainability</span>.
  </p>
</div>

            
            <div className="glass rounded-2xl p-8">
  <h3 className="text-2xl font-semibold mb-4 gradient-text">What Drives Me</h3>
  <p className="text-gray-300 leading-relaxed text-l">
    I'm passionate about <span className="text-white font-semibold">emerging technologies</span>, 
    <span className="text-white font-semibold"> open-source contributions</span>, and 
    <span className="text-white font-semibold"> continuous learning</span>. 
    When I'm not coding, you'll find me diving deep into 
    <span className="text-primary"> full-stack architectures</span>, experimenting with 
    <span className="text-primary"> DevOps workflows</span>, deploying on 
    <span className="text-white font-semibold"> cloud platforms</span>, or sharing knowledge to help other aspiring developers grow.
  </p>
</div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Professional Highlights</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Location</span>
                <span className="text-white font-medium">Erode, India</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Experience</span>
                <span className="text-white font-medium">1+ Years (Real-world Projects)</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Specialization</span>
                <span className="text-primary font-medium">Full-Stack Development</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Focus Areas</span>
                <span className="text-white font-medium">React • Next.js • Node.js • Cloud </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-700">
                <span className="text-gray-400">Projects Delivered</span>
                <span className="text-green-400 font-medium">5+ impactful full-stack projects</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-gray-400">Availability</span>
                <span className="text-green-400 font-medium">Open to opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
