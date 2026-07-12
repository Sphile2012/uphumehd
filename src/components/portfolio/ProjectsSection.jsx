import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Fraud Education System",
    description: "Full-stack fraud detection dashboard with real-time analytics, transaction monitoring, and alert management.",
    url: "https://fraudeducationsystem.netlify.app",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop",
    icon: "🛡️",
    tags: ["React", "Firebase", "Dashboard"],
  },
  {
    title: "Netflix Clone",
    description: "Streaming platform clone with dynamic content loading, responsive layout, and rich media display.",
    url: "https://netfflixeducation.netlify.app",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop",
    icon: "🎬",
    tags: ["React", "CSS", "API"],
  },
  {
    title: "Tesla Landing Page",
    description: "Pixel-perfect Tesla landing page with smooth scroll animations and responsive car showcase sections.",
    url: "https://phumetesla.netlify.app",
    image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop",
    icon: "🚗",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "YouTube Clone",
    description: "YouTube features overview app with video playback, category filtering, and responsive design.",
    url: "https://phumeyoutube.netlify.app",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop",
    icon: "▶️",
    tags: ["React", "API", "Responsive"],
  },
  {
    title: "Amazon Landing Page",
    description: "E-commerce landing page with user authentication, Google sign-in, and modern UI design.",
    url: "https://amazonstorres.netlify.app",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=600&fit=crop",
    icon: "🛒",
    tags: ["React", "Firebase", "Auth"],
  },
  {
    title: "Twitter Clone",
    description: "Social media platform clone with tweet feed, trending topics, user profiles, and real-time updates.",
    url: "https://fwwitter.netlify.app",
    image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=600&fit=crop",
    icon: "🐦",
    tags: ["React", "CSS", "State Management"],
  },
  {
    title: "Google Keep Notes",
    description: "Note-taking application inspired by Google Keep with create, edit, and organize notes functionality.",
    url: "https://googlekeepnoteapp.netlify.app",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    icon: "📝",
    tags: ["React", "CRUD", "UI"],
  },
  {
    title: "Airbnb Clone",
    description: "Vacation rental platform with search, filtering, property listings, and booking interface.",
    url: "https://phumehbnb.netlify.app",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    icon: "🏠",
    tags: ["React", "Responsive", "API"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 font-inter relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm tracking-widest uppercase text-violet-400 mb-3">Portfolio</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            A showcase of full-stack web applications demonstrating expertise in React, Firebase, modern APIs, and responsive design principles.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}