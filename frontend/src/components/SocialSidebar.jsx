import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import { personalInfo } from '../mockData';

const SocialSidebar = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      url: personalInfo.socialMedia.github,
      color: 'hover:text-white'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: personalInfo.socialMedia.linkedin,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Instagram', 
      icon: Instagram, 
      url: personalInfo.socialMedia.instagram,
      color: 'hover:text-pink-400'
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: personalInfo.socialMedia.facebook,
      color: 'hover:text-blue-500'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      url: personalInfo.socialMedia.twitter,
      color: 'hover:text-sky-400'
    }
  ];

  return (
    <>
      {/* Desktop Sidebar - Left Side */}
      <div className="hidden lg:block fixed left-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIcon(social.name)}
                onMouseLeave={() => setHoveredIcon(null)}
                className={`text-gray-500 transition-all duration-300 ${
                  social.color
                } hover:scale-110 relative group`}
                style={{
                  animation: `slideInLeft 0.5s ease-out ${index * 0.1}s forwards`,
                  opacity: 0
                }}
              >
                <Icon size={22} />
                
                {/* Tooltip */}
                <span className="absolute left-full ml-4 px-3 py-1 bg-white text-black text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {social.name}
                </span>
              </a>
            );
          })}
        </div>
        
        {/* Vertical Line */}
        <div className="mt-8 w-px h-24 bg-gray-700 mx-auto"></div>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-t border-gray-800">
        <div className="flex justify-around items-center py-4 px-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 transition-all duration-300 ${
                  social.color
                } active:scale-95`}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default SocialSidebar;
