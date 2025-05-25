
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with EmailJS or your preferred email service
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/shyam-3045', color: '#333' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/s-m-shyam-2740b4321/', color: '#0077B5' },
    { name: 'GMail', icon: Mail, href: 'https://mail.google.com/mail/u/1/#inbox?compose=jrjtXGkPRdNssvrZGnnbxgXgwhGShSdztpdJTkwgPvvmWRQKZlMMdQLBLDWjlbNGHdVctmxL', color: '#1DA1F2' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/_s.h.y.a.m_10/', color: '#E4405F' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 's.m.shyam45@gmail.com',
      color: '#667eea'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Erode, Tamil Nadu, India',
      color: '#f093fb'
    },
    {
      icon: Clock,
      label: 'Availability',
      value: 'Open to work',
      color: '#4ade80',
      isStatus: true
    }
  ];

  return (
    <section id="contact" ref={ref} className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Let's Connect</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={info.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="flex items-center space-x-4 group cursor-pointer hover:bg-gray-800/50 p-3 rounded-lg transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `${info.color}20` }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent 
                          className="w-6 h-6 group-hover:text-white transition-colors" 
                          style={{ color: info.color }}
                        />
                      </motion.div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className={`font-medium ${info.isStatus ? 'text-green-400' : 'text-white'} group-hover:text-primary transition-colors`}>
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 group relative overflow-hidden"
                      style={{ '--hover-color': social.color } as any}
                    >
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        style={{ backgroundColor: social.color }}
                      />
                      <IconComponent 
                        className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors relative z-10" 
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Send Message</h3>
            <form
  action="https://formsubmit.co/s.m.shyam45@gmail.com"
  method="POST"
  className="space-y-6"
>
  {/* Optional hidden inputs */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_subject" value="New message from Shyam Portfolio" />
  <input type="hidden" name="_next" value="https://shyam-sm.web.app//thank-you" />

  <div className="grid sm:grid-cols-2 gap-4">
    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <label className="block text-gray-400 mb-2 font-medium">Name</label>
      <input
        type="text"
        name="name"
        required
        className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:bg-gray-800"
        placeholder="Your name"
      />
    </motion.div>
    <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <label className="block text-gray-400 mb-2 font-medium">Email</label>
      <input
        type="email"
        name="email"
        required
        className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:bg-gray-800"
        placeholder="your.email@example.com"
      />
    </motion.div>
  </div>

  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
    <label className="block text-gray-400 mb-2 font-medium">Subject</label>
    <input
      type="text"
      name="subject"
      required
      className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 hover:bg-gray-800"
      placeholder="Project inquiry"
    />
  </motion.div>

  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
    <label className="block text-gray-400 mb-2 font-medium">Message</label>
    <textarea
      name="message"
      required
      rows={5}
      className="w-full bg-gray-800/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none hover:bg-gray-800"
      placeholder="Tell me about your project..."
    />
  </motion.div>

  <motion.button
    type="submit"
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-white py-4 rounded-lg transition-all duration-300 glow hover:shadow-lg font-medium"
  >
    <motion.span
      initial={{ opacity: 1 }}
      whileHover={{ opacity: 0.8 }}
      className="flex items-center justify-center space-x-2"
    >
      <Mail className="w-5 h-5" />
      <span>Send Message</span>
    </motion.span>
  </motion.button>
</form>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
