import React from "react";
import { skills } from "../mockData"; // nanti lo ubah data di sini

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-lime-400">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-lime-400"></div>
        </div>

        {/* ONLY 3 CIRCLES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.categories.slice(0, 3).map((category, index) => (
            <div
              key={index}
              className="p-8 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-lime-400/30 transition-all duration-300 flex flex-col items-center"
            >
              <div className="relative w-40 h-40 mb-6">
                <svg className="transform -rotate-90 w-40 h-40">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-zinc-800"
                  />

                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 70}`}
                    strokeDashoffset={`${
                      2 * Math.PI * 70 * (1 - category.percentage / 100)
                    }`}
                    className="text-lime-400 transition-all duration-1000"
                    strokeLinecap="round"
                  />
                </svg>

                {/* Percentage Number */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">
                    {category.percentage}%
                  </span>
                </div>
              </div>

              {/* Category Title */}
              <h3 className="text-xl font-semibold text-white">
                {category.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
