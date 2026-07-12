import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Briefcase, DollarSign, Users } from "lucide-react";

const availabilityData = [
  {
    icon: Calendar,
    title: "Weekly Availability",
    value: "40 Hours/Week",
    detail: "Monday - Saturday",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: Clock,
    title: "Work Schedule",
    value: "Flexible Hours",
    detail: "Available immediately",
    color: "from-cyan-500 to-blue-600"
  },
  {
    icon: MapPin,
    title: "Work Location",
    value: "Remote | Onsite | Hybrid",
    detail: "Based in South Africa",
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: Briefcase,
    title: "Employment Type",
    value: "Full-Time Preferred",
    detail: "From R15,000/month",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: DollarSign,
    title: "Freelance Projects",
    value: "Websites from R2,500",
    detail: "Custom pricing available",
    color: "from-orange-500 to-amber-600"
  },
  {
    icon: Users,
    title: "Collaboration",
    value: "Open to Teams",
    detail: "Available for partnerships",
    color: "from-indigo-500 to-purple-600"
  }
];

export default function AvailabilitySection() {
  return (
    <section id="availability" className="py-24 px-6 font-inter relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm tracking-widest uppercase text-violet-400 mb-3">Let's Work Together</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Availability & <span className="text-gradient">Rates</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            Ready to start immediately. Flexible working arrangements to suit your project needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {availabilityData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-sm text-white/50 uppercase tracking-wider mb-2">{item.title}</h3>
              <p className="text-xl font-bold text-white mb-1">{item.value}</p>
              <p className="text-white/60 text-sm">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Why Hire Me?</h3>
              <ul className="space-y-3">
                {[
                  "Strong mathematical and analytical problem-solving skills",
                  "Committed to writing clean, maintainable code",
                  "Fast learner with passion for new technologies",
                  "Reliable communication and timely project delivery",
                  "Detail-oriented with focus on quality"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-white/70 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Work Ethic</h3>
              <p className="text-white/60 leading-relaxed mb-4">
                I approach every project with dedication, professionalism, and a commitment to excellence. 
                My background in mathematics has instilled a strong analytical mindset and attention to detail.
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                I'm eager to contribute to a dynamic team, take on challenging projects, and grow my skills 
                in a professional environment. Open to mentorship and continuous learning.
              </p>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:opacity-90 transition-all shadow-lg shadow-violet-500/30 hover:scale-105"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
