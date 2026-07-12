import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Smartphone, Database, Palette, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom responsive websites built with React, HTML5, CSS3, and modern JavaScript frameworks.",
    skills: ["React.js", "Responsive Design", "SEO Optimization"]
  },
  {
    icon: Code,
    title: "Full-Stack Applications",
    description: "End-to-end web applications with frontend and backend integration using Firebase and modern APIs.",
    skills: ["React", "Firebase", "REST APIs"]
  },
  {
    icon: Smartphone,
    title: "UI/UX Implementation",
    description: "Pixel-perfect implementation of designs with focus on user experience and accessibility.",
    skills: ["Tailwind CSS", "Framer Motion", "Component Libraries"]
  },
  {
    icon: Database,
    title: "Database Integration",
    description: "Database design and integration with Firebase, including authentication and real-time data.",
    skills: ["Firebase", "Data Modeling", "Authentication"]
  },
  {
    icon: Palette,
    title: "Landing Pages",
    description: "High-converting landing pages for businesses and personal brands with modern design.",
    skills: ["HTML5/CSS3", "JavaScript", "Performance Optimization"]
  },
  {
    icon: Zap,
    title: "Website Maintenance",
    description: "Ongoing support, updates, bug fixes, and performance optimization for existing websites.",
    skills: ["Debugging", "Updates", "Performance Tuning"]
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 font-inter relative overflow-hidden bg-[#0d0a1e]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm tracking-widest uppercase text-violet-400 mb-3">What I Offer</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Services & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Professional web development services tailored to your needs. From concept to deployment, I deliver quality solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-violet-400/50 transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-violet-500/30">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/60 mb-4 leading-relaxed">{service.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:opacity-90 transition-all shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105"
          >
            Get Started
            <Zap className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
