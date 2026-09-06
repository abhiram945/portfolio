import React, { useState } from "react";

const skillsSet = [
  {
    category: "ML, Gen AI & Data Science",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Large Language Models",
      "Retrieval Augmented Generation",
      "Agentic AI",
      "AI Agents",
      "Model Context Protocol",
      "Prompt Engineering"
    ],
  },
  {
    category: "Programming & Scripting",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    skills: ["Python", "JavaScript", "TypeScript", "Java"],
  },
  {
    category: "App Development",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    skills: ["React Native", "Expo"],
  },
  {
    category: "Web Development",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React Js",
      "Tailwind CSS",
      "Node Js",
      "Express Js",
      "Django",
      "FastAPI",
    ],
  },
  {
    category: "APIs & Realtime Updates",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    skills: ["REST API", "WebSockets", "Socket.io", "WebRTC"],
  },
  {
    category: "Databases",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: ["MongoDB", "Firebase", "MySQL", "PostgreSQL", "Pinecone"],
  },
  {
    category: "Cloud, DevOps & Tools",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    skills: ["Azure", "AWS", "Git", "GitHub", "Postman", "SEO", "MS Office"],
  },
];

const Skills = () => {

  return (
    <section id="skills" className="w-full bg-primary py-16 px-4 sm:px-8 lg:px-12">
      {/* Section Header */}
      <div className="mb-10 text-center">
        <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl tracking-wider text-black">
          <span className="text-secondary">SKILLS</span> GAINED
        </h2>
        <div className="mx-auto mt-2 h-1.5 w-20 rounded-full bg-secondary" />
      </div>


      {/* Grid Container */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillsSet.map((group) => (
          <div
            key={group.category}
            className={`${group.skills.length > 8 ? 'lg:col-span-2' : ''} group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-secondary/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary hover:shadow-xl`}
          >
            {/* Background Accent Mesh */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-secondary/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-secondary/10" />

            <div>
              {/* Card Header */}
              <div className="relative mb-6 flex items-center justify-between border-b border-gray-100 pb-3">
                <div className="flex items-center gap-2.5 text-secondary">
                  <div className="rounded-lg bg-secondary/10 p-2 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                    {group.icon}
                  </div>
                  <h3 className="text-base font-bold tracking-wide text-gray-900">
                    {group.category}
                  </h3>
                </div>
                <span className="rounded-full bg-secondary/10 px-2.5 py-1 text-xs font-extrabold text-secondary">
                  {group.skills.length}
                </span>
              </div>

              {/* Skill Pill Badges */}
              <div className="relative flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-lg border border-gray-200/80 bg-gray-50/60 px-3 py-1.5 text-xs font-semibold text-gray-700 transition-all duration-200 hover:scale-105 hover:border-secondary hover:bg-white hover:text-secondary hover:shadow-sm"
                  >
                    <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-secondary/50 group-hover:bg-secondary" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;