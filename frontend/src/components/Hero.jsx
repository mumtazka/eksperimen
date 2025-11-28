import React from 'react';
import { MapPin, Mail, Phone, ArrowDown } from 'lucide-react';
import { personalInfo } from '../mockData';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Greeting */}
          <div className="mb-6 opacity-0 animate-[fadeIn_0.6s_ease-out_0.2s_forwards]">
            <p className="text-lime-400 text-sm font-semibold tracking-wider uppercase">
              Hello, I'm
            </p>
          </div>

          {/* Name */}
          <h1 className="mb-6 opacity-0 animate-[fadeIn_0.6s_ease-out_0.4s_forwards]">
            <span className="block text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
              {personalInfo.name.split(' ')[0]}
            </span>
            <span className="block text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
              {personalInfo.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          {/* Title */}
          <div className="mb-8 opacity-0 animate-[fadeIn_0.6s_ease-out_0.6s_forwards]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300">
              {personalInfo.title}
            </h2>
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-6 mb-12 opacity-0 animate-[fadeIn_0.6s_ease-out_0.8s_forwards]">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={18} className="text-lime-400" />
              <span className="text-sm">{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail size={18} className="text-lime-400" />
              <a href={`mailto:${personalInfo.email}`} className="text-sm hover:text-lime-400 transition-colors">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Phone size={18} className="text-lime-400" />
              <a href={`tel:${personalInfo.phone}`} className="text-sm hover:text-lime-400 transition-colors">
                {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 opacity-0 animate-[fadeIn_0.6s_ease-out_1s_forwards]">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-lime-400 text-black font-semibold rounded-full hover:bg-lime-300 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get In Touch
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 border-2 border-lime-400 text-lime-400 font-semibold rounded-full hover:bg-lime-400 hover:text-black transition-all duration-300 hover:scale-105 active:scale-95"
            >
              View Projects
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-[fadeIn_0.6s_ease-out_1.2s_forwards]">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-lime-400 transition-colors group"
          >
            <span className="text-xs uppercase tracking-wider">Scroll Down</span>
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
