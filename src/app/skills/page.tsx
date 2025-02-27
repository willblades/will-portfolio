"use client";

import React, { ReactNode } from "react";
import { 
  SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiReact, 
  SiCplusplus, SiDotnet, SiMysql, SiMongodb, SiPostgresql, SiSubversion, SiOracle 
} from "react-icons/si";
import { 
  FaHtml5, FaCss3, FaNodeJs, FaVuejs, FaAngular, FaPython, FaAws, FaJira, FaGithub, FaDocker, FaGitlab, FaJava 
} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

interface Skill {
  name: string;
  icon: ReactNode;
}

function Skills() {
  const skillsData: Record<string, Skill[]> = {
    Frontend: [
      { name: "HTML5", icon: <FaHtml5 size={40} className="text-orange-500" /> },
      { name: "CSS3", icon: <FaCss3 size={40} className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript size={40} className="text-yellow-500" /> },
      { name: "TypeScript", icon: <SiTypescript size={40} className="text-blue-600" /> },
      { name: "React", icon: <SiReact size={40} className="text-cyan-500" /> },
      { name: "Next.js", icon: <SiNextdotjs size={40} className="text-black" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-teal-400" /> },
      { name: "Vue.js", icon: <FaVuejs size={40} className="text-green-500" /> },
      { name: "Angular", icon: <FaAngular size={40} className="text-red-600" /> },
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs size={40} className="text-green-500" /> },
      { name: ".NET", icon: <SiDotnet size={40} className="text-purple-500" /> },
      { name: "Python", icon: <FaPython size={40} className="text-blue-400" /> },
      { name: "C++", icon: <SiCplusplus size={40} className="text-blue-700" /> },
      { name: "Java", icon: <FaJava size={40} className="text-orange-500" /> },
    ],
    Databases: [
      { name: "MySQL", icon: <SiMysql size={40} className="text-blue-600" /> },
      { name: "MongoDB", icon: <SiMongodb size={40} className="text-green-600" /> },
      { name: "PostgreSQL", icon: <SiPostgresql size={40} className="text-blue-700" /> },
      { name: "Oracle", icon: <SiOracle size={40} className="text-red-700" /> },
    ],
    Cloud: [
      { name: "AWS", icon: <FaAws size={40} className="text-orange-400" /> },
      { name: "Azure", icon: <VscAzure size={40} className="text-blue-500" /> },
    ],
    Other: [
      { name: "Subversion", icon: <SiSubversion size={40} className="text-gray-500" /> },
      { name: "GitHub", icon: <FaGithub size={40} className="text-gray-800" /> },
      { name: "GitLab", icon: <FaGitlab size={40} className="text-orange-600" /> },
      { name: "Docker", icon: <FaDocker size={40} className="text-blue-500" /> },
      { name: "Jira", icon: <FaJira size={40} className="text-blue-700" /> },
    ],
  };

  // Helper to render a category block
  const renderCategory = (title: string, skills: Skill[]) => (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center">
            {skill.icon}
            <span className="mt-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-12">My Skills</h1>

        {/* First row: 3 columns (Frontend, Backend, Databases) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {renderCategory("Frontend", skillsData.Frontend)}
          {renderCategory("Backend", skillsData.Backend)}
          {renderCategory("Databases", skillsData.Databases)}
        </div>

        {/* Second row: 2 columns (Cloud, Other) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {renderCategory("Cloud", skillsData.Cloud)}
          {renderCategory("Other", skillsData.Other)}
        </div>
      </div>
    </div>
  );
}

export default Skills;
