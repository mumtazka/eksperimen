import React, { useState } from 'react';
import { projects } from '../mockData';
import { ExternalLink, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-lime-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-lime-400"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-lime-400/30 transition-all duration-300">
                {/* Project Image */}
                <div className="relative aspect-video bg-zinc-800 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <ExternalLink size={32} className="text-zinc-700 mx-auto mb-2" />
                      <p className="text-zinc-600 text-xs">Project Image</p>
                    </div>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">View Details</span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  {/* Category & Year */}
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500">{project.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-zinc-800 text-xs text-gray-300 rounded border border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs text-gray-500">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-zinc-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-zinc-800">
            {/* Modal Header */}
            <div className="sticky top-0 bg-zinc-900 border-b border-zinc-800 p-6 flex justify-between items-start z-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <div className="flex gap-3 text-sm">
                  <span className="text-lime-400 font-semibold">{selectedProject.category}</span>
                  <span className="text-gray-500">{selectedProject.year}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors"
              >
                <X size={24} className="text-gray-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Main Image */}
              <div className="aspect-video bg-zinc-800 rounded-xl mb-6 flex items-center justify-center">
                <div className="text-center">
                  <ExternalLink size={48} className="text-zinc-700 mx-auto mb-3" />
                  <p className="text-zinc-600">Project Screenshot</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">About Project</h4>
                <p className="text-gray-400 leading-relaxed">{selectedProject.description}</p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-zinc-800 text-sm text-gray-300 rounded-lg border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
