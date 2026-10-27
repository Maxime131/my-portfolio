import { motion } from 'motion/react';
import { revealProps } from './reveal';
import { Code, Database, GitBranch, Layers, Server, Smartphone } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: Smartphone,
      color: 'cyan',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 92 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      category: 'Backend',
      icon: Server,
      color: 'blue',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 82 },
        { name: 'REST APIs', level: 88 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    {
      category: 'Database',
      icon: Database,
      color: 'purple',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Firebase', level: 78 },
      ],
    },
    {
      category: 'Tools & Others',
      icon: GitBranch,
      color: 'cyan',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 72 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
      cyan: {
        bg: 'from-cyan-500 to-cyan-600',
        border: 'border-cyan-500/20',
        text: 'text-cyan-400',
        glow: 'shadow-cyan-500/20',
      },
      blue: {
        bg: 'from-blue-500 to-blue-600',
        border: 'border-blue-500/20',
        text: 'text-blue-400',
        glow: 'shadow-blue-500/20',
      },
      purple: {
        bg: 'from-purple-500 to-purple-600',
        border: 'border-purple-500/20',
        text: 'text-purple-400',
        glow: 'shadow-purple-500/20',
      },
    };
    return colors[color];
  };

  return (
    <motion.section {...revealProps} id="skills" className="py-24 px-6 bg-gray-900/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
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
            Proficient in modern web technologies and frameworks, constantly expanding my skill set.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            return (
              <div key={categoryIndex}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-700" />
                  <h3 className={`text-lg font-medium ${colors.text}`}>
                    {category.category}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-700" />
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`group flex items-center gap-3 px-4 py-4 bg-gradient-to-br from-gray-900/80 to-gray-800/60 border border-gray-800 rounded-xl hover:border-cyan-500/40 hover:-translate-y-0.5 hover:shadow-lg ${colors.glow} transition-all duration-300`}
                    >
                      <category.icon className={colors.text} size={20} />
                      <div className="min-w-0">
                        <div className="text-gray-100 truncate">{skill.name}</div>
                        <div className={`${colors.text} text-xs`}>{skill.level}%</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
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
