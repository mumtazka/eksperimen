import React from 'react';
import { experiences } from '../mockData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Work <span className="text-lime-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-lime-400"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-zinc-800"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-lime-400 rounded-full border-4 border-zinc-950"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-all duration-300 group">
                    {/* Type Badge */}
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${
                      exp.type === 'internship' 
                        ? 'bg-lime-400/10 text-lime-400' 
                        : 'bg-blue-400/10 text-blue-400'
                    }`}>
                      {exp.type === 'internship' ? 'Internship' : 'Full-time'}
                    </span>

                    {/* Job Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                      {exp.title}
                    </h3>

                    {/* Company */}
                    <div className="flex items-center gap-2 mb-2 text-gray-400" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      <Briefcase size={16} className="text-lime-400" />
                      <span className="text-sm font-medium">{exp.company}</span>
                    </div>

                    {/* Location & Duration */}
                    <div className="flex flex-wrap gap-3 mb-4 text-gray-500 text-sm" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2" style={{ justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start' }}>
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-zinc-800 text-xs text-gray-300 rounded-full border border-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty Space for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
