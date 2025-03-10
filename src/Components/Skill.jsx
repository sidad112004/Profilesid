import React from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { 
  SiExpress, 
  SiMongodb, 
  SiPostman, 
  SiNextdotjs, 
  SiPrisma, 
  SiTailwindcss, 
  SiC, 
  SiCplusplus, 
  SiJavascript, 
  SiMysql, 
  SiTypescript 
} from 'react-icons/si';
import { MdSchool } from 'react-icons/md';

function Skill() {
  const technicalSkills = [
    "React",
    "Express.js",
    "MongoDB",
    "Node.js",
    "Postman",
    "Next.js",
    "Prisma",
    "Tailwind CSS",
  ];

  const languages = [
    "C",
    "C++",
    "JavaScript",
    "SQL",
    "TypeScript",
  ];

  const coursework = [
    "Data Structures",
    "Algorithms",
    "Operating Systems",
    "OOP",
    "DBMS",
    "Computer Networks"
  ];

  // Mapping for Technical Skills icons
  const techIcons = {
    "React": FaReact,
    "Express.js": SiExpress,
    "MongoDB": SiMongodb,
    "Node.js": FaNodeJs,
    "Postman": SiPostman,
    "Next.js": SiNextdotjs,
    "Prisma": SiPrisma,
    "Tailwind CSS": SiTailwindcss,
  };

  // Mapping for Languages icons
  const languageIcons = {
    "C": SiC,
    "C++": SiCplusplus,
    "JavaScript": SiJavascript,
    "SQL": SiMysql,
    "TypeScript": SiTypescript,
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen text-white">
      <h1 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Skills & Expertise
      </h1>

      {/* Technical Skills Section */}
      <section className="w-full max-w-6xl mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-teal-400">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {technicalSkills.map((skill) => {
            const IconComponent = techIcons[skill];
            return (
              <div
                key={skill}
                className="card bg-gray-800 text-white shadow-lg hover:shadow-teal-400 transition transform hover:scale-105 duration-300 p-4 rounded-lg border border-teal-400 flex flex-col items-center justify-center"
              >
                {IconComponent && <IconComponent className="text-4xl mb-2" />}
                <h3 className="card-title text-xl font-semibold">{skill}</h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* Languages Section */}
      <section className="w-full max-w-6xl mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-yellow-400">Languages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {languages.map((lang) => {
            const IconComponent = languageIcons[lang];
            return (
              <div
                key={lang}
                className="card bg-gray-800 text-white shadow-lg hover:shadow-yellow-400 transition transform hover:scale-105 duration-300 p-4 rounded-lg border border-yellow-400 flex flex-col items-center justify-center"
              >
                {IconComponent && <IconComponent className="text-4xl mb-2" />}
                <h3 className="card-title text-xl font-semibold">{lang}</h3>
              </div>
            );
          })}
        </div>
      </section>

      {/* Relevant Coursework Section (Glassmorphism Style) */}
      <section className="w-full max-w-6xl mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-400">Relevant Coursework</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {coursework.map((course) => (
            <div
              key={course}
              className="backdrop-blur-lg bg-white/10 border border-pink-400 shadow-lg hover:shadow-pink-400 transition transform hover:scale-105 duration-300 p-4 rounded-lg text-center flex flex-col items-center justify-center"
            >
              <MdSchool className="text-4xl mb-2" />
              <h3 className="text-xl font-semibold text-white">{course}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Skill;
