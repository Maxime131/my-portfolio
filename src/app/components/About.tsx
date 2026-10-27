import { motion } from 'motion/react';
import { revealProps } from './reveal';
import { Code2, Lightbulb, Rocket, Target } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, efficient, and well-documented code is my priority.',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'I love tackling complex challenges and finding elegant solutions.',
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Constantly learning new technologies and best practices in development.',
    },
    {
      icon: Target,
      title: 'Goal-Driven',
      description: 'Focused on delivering high-quality results that exceed expectations.',
    },
  ];

  return (
    <motion.section {...revealProps} id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
            About Me
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Passionate About{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Building Solutions
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I'm a full-stack developer with a passion for creating beautiful, functional, 
            and user-friendly applications. With expertise in modern web technologies, 
            I transform ideas into reality through clean code and innovative thinking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-900/50 border border-gray-800 rounded-xl hover:bg-gray-800/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-cyan-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-100">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-800 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                3+
              </div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                12
              </div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
