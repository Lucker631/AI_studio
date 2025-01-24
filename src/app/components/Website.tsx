"use client";
import React from "react";
import { Code2, MessageSquare, Workflow, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const Website = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      icon: <Code2 className="w-12 h-12 mb-4 text-indigo-600" />,
      title: "Website Development",
      description:
        "Custom websites and systems with seamless AI integration, built for performance and scalability.",
    },
    {
      icon: <MessageSquare className="w-12 h-12 mb-4 text-indigo-600" />,
      title: "Bot Development",
      description:
        "Intelligent chatbots and Telegram bots powered by advanced learning algorithms.",
    },
    {
      icon: <Cpu className="w-12 h-12 mb-4 text-indigo-600" />,
      title: "AI Integration",
      description:
        "Transform your business processes with intelligent automation and data analysis.",
    },
    {
      icon: <Workflow className="w-12 h-12 mb-4 text-indigo-600" />,
      title: "Full-Cycle Development",
      description:
        "End-to-end solutions from concept and design to implementation and ongoing support.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-purple-600  via-indigo-600 to-blue-600 text-white relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-black opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <div className="container mx-auto px-6 py-24 relative">
          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            AI-Powered Digital Solutions
          </motion.h1>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl"
          >
            We create intelligent digital products using artificial
            intelligence, helping businesses automate processes and implement
            modern technologies.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started
          </motion.button>
        </div>
      </motion.header>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-b from-white to-indigo-50"
      >
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-3xl text-black font-bold text-center mb-12"
          >
            Who We Are
          </motion.h2>
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-lg text-gray-600"
          >
            <p>
              We are a team of technology enthusiasts: backend and frontend
              developers, UX/UI designers, united by our passion for innovation.
              Our expertise in AI and digital solutions helps companies
              transform by adding intelligence, convenience, and innovation to
              their projects.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20"
      >
        <div className="container mx-auto px-6">
          <motion.h2
            {...fadeInUp}
            className="text-3xl font-bold text-black text-center mb-16"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-indigo-600">{service.icon}</div>
                <h3 className="text-xl text-black font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2 {...fadeInUp} className="text-3xl font-bold mb-8">
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Let us be your guide into the world of AI and modern technology
            solutions.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </motion.button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeInUp}>
              <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
              <p>Email: contact@aistudio.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <h3 className="text-white text-lg font-semibold mb-4">
                Location
              </h3>
              <p>123 Tech Street</p>
              <p>Innovation City, IC 12345</p>
            </motion.div>
            <motion.div {...fadeInUp} transition={{ delay: 0.4 }}>
              <h3 className="text-white text-lg font-semibold mb-4">
                Follow Us
              </h3>
              <div className="space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="hover:text-white"
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="hover:text-white"
                >
                  Twitter
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="hover:text-white"
                >
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; 2025 AI Development Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;
