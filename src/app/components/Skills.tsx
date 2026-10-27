import { motion } from 'motion/react';
import { revealProps } from './reveal';
import { Cloud, Code, Monitor, Palette, Server } from 'lucide-react';

const coreStack = ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Figma'];

const expertise = [
  {
    title: 'Product Design (UI/UX)',
    icon: Palette,
    summary: 'User-centred interfaces and design systems, taken from research to polished, shippable UI.',
    skills: ['Figma', 'Design Systems', 'Wireframing & Prototyping', 'Responsive UI', 'Dashboard UX', 'Accessibility'],
  },
  {
    title: 'Frontend Engineering',
    icon: Monitor,
    summary: 'Fast, accessible and maintainable interfaces built with a modern component-driven stack.',
    skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Motion & Animation'],
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    summary: 'Secure, well-structured services and APIs that power real business workflows.',
    skills: ['Node.js', 'Express', 'REST APIs', 'GraphQL', 'Authentication & Roles', 'SMS / USSD / WhatsApp Integrations'],
  },
  {
    title: 'Data, Cloud & Delivery',
    icon: Cloud,
    summary: 'Reliable data layers and deployment workflows for production systems.',
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'AWS', 'Git & GitHub'],
  },
];

export function Skills() {
  return (
    <motion.section {...revealProps} id="skills" className="py-24 px-6 bg-gray-900/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
            Skills & Expertise
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end product capability, from UI/UX design to production-grade frontend, backend and cloud delivery.
          </p>
        </div>

        {/* Core stack */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          <span className="text-sm uppercase tracking-wider text-gray-500 mr-2">Core stack</span>
          {coreStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full text-sm font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {expertise.map((area) => (
            <div
              key={area.title}
              className="group p-7 bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-800 rounded-2xl hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20">
                  <area.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-100">{area.title}</h3>
              </div>
              <p className="text-gray-400 mb-5 leading-relaxed">{area.summary}</p>
              <div className="flex flex-wrap gap-2">
                {area.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm text-gray-300 bg-gray-800/80 border border-gray-700 rounded-lg group-hover:border-cyan-500/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">
            Other Technologies
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[
              'GPS Maintenance',
              'GPS Tracking',
              'IoT Projects',
              'Arduino',
              'Raspberry Pi',
              'ESP32',
              'MQTT',
              'Sensors',
              'GSM/GPRS',
              'LoRa',
              'Google Maps API',
              'Embedded C',
            ].map((tech, index) => (
              <div
                key={index}
                className="group p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-cyan-500/50 hover:bg-gray-800/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 text-center"
              >
                <Code className="mx-auto mb-2 text-cyan-400 group-hover:scale-110 transition-transform" size={32} />
                <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
