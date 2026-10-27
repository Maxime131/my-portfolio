import { ArrowRight, Dribbble, Linkedin, Mail, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const headline = [
  { text: 'Full-Stack', color: 'text-cyan-400' },
  { text: 'Developer', color: 'text-sky-400' },
  { text: '&', color: 'text-blue-500' },
  { text: 'Product', color: 'text-indigo-400' },
  { text: 'Builder', color: 'text-purple-500' },
];

const intro =
  'I craft exceptional digital experiences through elegant code and thoughtful design. Specializing in React, TypeScript, and modern web technologies.';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="flex items-center justify-center pt-28 pb-20 px-6 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block hero-in" style={{ ["--d" as string]: "0.05s" }}>
                <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm">
                  Hi, I'm Maxime
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight" aria-label="Full-Stack Developer & Product Builder">
                {headline.map((w, i) => (
                  <motion.span
                    key={i}
                    aria-hidden="true"
                    className={`inline-block mr-[0.25em] ${w.color}`}
                    initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.7, delay: 0.25 + i * 0.1, ease: EASE }}
                  >
                    {w.text}
                  </motion.span>
                ))}
              </h1>
              
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                {intro.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.28em]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.9 + i * 0.03, ease: EASE }}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 hero-in" style={{ ["--d" as string]: "1.7s" }}>
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                View Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-lg font-semibold text-gray-300 hover:bg-gray-700 hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-2"
              >
                Contact Me
                <Mail size={20} />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 hero-in" style={{ ["--d" as string]: "1.9s" }}>
              <span className="text-gray-500">Connect with me:</span>
              <div className="flex gap-3">
                <a
                  href="https://dribbble.com/Maxime250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-gray-700 transition-all duration-300"
                >
                  <Dribbble size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/maxime-ndagijimana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-gray-700 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-sm mx-auto lg:mr-0 lg:ml-auto hero-in" style={{ ["--d" as string]: "0.3s" }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-2xl blur-2xl" />
              
              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden p-[1.5px] bg-gradient-to-br from-cyan-400/60 via-blue-500/30 to-purple-500/60 shadow-2xl">
                <div className="relative rounded-[0.9rem] overflow-hidden">
                <ImageWithFallback
                  src="/profile.jpeg"
                  alt="Maxime Ndagijimana"
                  className="w-full aspect-[4/5] object-cover object-top"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent" />
                </div>
              </div>

              {/* Location chip */}
              <motion.div
                className="absolute -bottom-5 right-4 flex items-center gap-2 px-4 py-2 bg-gray-900/90 backdrop-blur border border-gray-700 rounded-full text-sm text-gray-200 shadow-lg"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: [0, -6, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 1.4 },
                  y: { duration: 4, delay: 2, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                <MapPin size={16} className="text-cyan-400" />
                Kigali, Rwanda
              </motion.div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl opacity-20 blur-sm hero-float" style={{ ["--r" as string]: "12deg" }} />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl opacity-20 blur-sm hero-float" style={{ ["--r" as string]: "-12deg" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
