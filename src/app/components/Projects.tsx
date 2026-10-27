import { motion } from 'motion/react';
import { revealProps } from './reveal';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
  }[] = [
    {
      title: 'Guarsy – Smart HR & Payroll Platform',
      description: 'Guarsy streamlines attendance tracking and payroll management with precision and ease — empowering organizations to focus on what matters most: their people.',
      image: '/projects/guarsy.png',
      tags: ['HR', 'Payroll', 'Attendance'],
    },
    {
      title: 'Leazi – Property Management',
      description: 'Simplify property management, maximize returns. Leazi transforms the way you manage properties, putting powerful tools and insights at your fingertips — from automated rent collection and smart maintenance tracking to real-time analytics.',
      image: '/projects/leazi.svg',
      tags: ['Rent Collection', 'Maintenance', 'Analytics'],
    },
    {
      title: 'SwiftQom – Communicate, Operate & Grow',
      description: 'SwiftQom is a versatile all-in-one platform built for modern businesses — combining communication, support, project management, SMS campaigns, and operational tools in a single place.',
      image: '/projects/swiftqom.png',
      tags: ['Communication', 'Project Management', 'SMS', 'Support'],
    },
    {
      title: 'QonLotto',
      description: 'Buy & Win · Lucky Draw · Scratch & Win — powered by SMS, USSD, WhatsApp & QR. One platform, full campaign lifecycle.',
      image: '/projects/qonlotto.png',
      tags: ['SMS', 'USSD', 'WhatsApp', 'QR'],
    },
  ];

  return (
    <motion.section {...revealProps} id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
            Portfolio
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of the platforms I have built.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/90 border border-gray-700 rounded-lg text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900/90 border border-gray-700 rounded-lg text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white text-center hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg font-semibold text-gray-300 text-center hover:bg-gray-700 hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
      </div>
    </motion.section>
  );
}
