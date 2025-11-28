import React from 'react';
import { personalInfo } from '../mockData';
import { Code, Palette, Database, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Membangun user interface yang modern, responsif, dan interaktif'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Mengembangkan API dan database yang robust dan scalable'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Merancang pengalaman pengguna yang intuitif dan menarik'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Mengoptimalkan performa aplikasi untuk pengalaman terbaik'
    }
  ];

  return (
    <section id="about" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="text-lime-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-lime-400"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl bg-zinc-900 aspect-square">
              {/* Placeholder untuk foto */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-lime-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Code size={48} className="text-lime-400" />
                  </div>
                  <p className="text-gray-500 text-sm">Foto Profile</p>
                  <p className="text-gray-600 text-xs mt-1">Upload nanti</p>
                </div>
              </div>
              
              {/* Border Effect */}
              <div className="absolute inset-0 border-2 border-lime-400/20 rounded-2xl group-hover:border-lime-400/40 transition-colors duration-300"></div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-lime-400/5 rounded-2xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-lime-400 font-semibold mb-6">
              {personalInfo.title}
            </p>
            
            <p className="text-gray-400 leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-lime-400/10 rounded-lg group-hover:bg-lime-400/20 transition-colors">
                        <Icon size={20} className="text-lime-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-white mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
