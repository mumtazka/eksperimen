import React from 'react';
import { education, certifications } from '../mockData';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Education & <span className="text-lime-400">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-lime-400"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap size={28} className="text-lime-400" />
              Education
            </h3>
            
            {education.map((edu) => (
              <div
                key={edu.id}
                className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-lime-400 transition-colors">
                      {edu.institution}
                    </h4>
                    <p className="text-lime-400 font-medium text-sm mt-1">{edu.degree}</p>
                  </div>
                  {edu.status === 'current' && (
                    <span className="px-3 py-1 bg-lime-400/10 text-lime-400 text-xs font-semibold rounded-full">
                      Current
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={14} />
                  <span>{edu.duration}</span>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Award size={28} className="text-lime-400" />
              Certifications
            </h3>
            
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-lime-400/10 rounded-lg group-hover:bg-lime-400/20 transition-colors">
                    <Award size={20} className="text-lime-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white group-hover:text-lime-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                  </div>
                </div>
                
                <span className="inline-block px-3 py-1 bg-zinc-800 text-lime-400 text-xs font-semibold rounded-full mb-3">
                  {cert.year}
                </span>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
