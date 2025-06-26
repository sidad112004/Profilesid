import React from 'react';
import { FaGithub, FaCode, FaPython } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

function Achievements() {
  const achievements = [
    {
      id: 1,
      icon: <SiLeetcode size={40} className="text-yellow-500" />,
      title: "550+ Leetcode Problems Solved",
      subtitle: "Contest rating 1782(Max),Top 8.53% on leetcode",
      link: "https://leetcode.com/u/sid112004/",
      linkText: "View Leetcode Profile",
      bgColor: "from-yellow-500 to-orange-400",
    },
    {
      id: 2,
      icon: <SiCodechef size={40} className="text-white" />,
      title: "CodeChef Rating 1502 (Max), 2⭐ coder",
      subtitle: "Active Competitive Programmer",
      link: "https://www.codechef.com/users/siddeshad11200",
      linkText: "View CodeChef Profile",
      bgColor: "from-gray-900 to-gray-700",
    },
    {
      id: 6,
      icon: <SiLeetcode size={40} className="text-green-500" />,
      title: "550+ Leetcode Problems Solved",
      subtitle: "Solved more that 70 problems",
      link: "https://www.geeksforgeeks.org/user/sid112004/",
      linkText: "View GFG Profile",
      bgColor: "from-green-500 to-teal-500",
    },
    {
      id: 3,
      icon: <FaGithub size={40} className="text-gray-300" />,
      title: "Project Code & Repositories",
      subtitle: "Explore my coding work on GitHub",
      link: "https://github.com/sidad112004",
      linkText: "View GitHub Profile",
      bgColor: "from-gray-800 to-gray-600",
    },
    {
      id: 4,
      icon: <FaPython size={40} className="text-blue-500" />,
      title: "Industrial Training in Python",
      subtitle: "Completed professional Python training",
      link: null,
      linkText: "",
      bgColor: "from-blue-500 to-teal-400",
    },
    {
      id: 5,
      icon: <FaCode size={40} className="text-green-500" />,
      title: "Alpha Geeks College Coding Club",
      subtitle: "Role: Head of DSA",
      link: null,
      linkText: "",
      bgColor: "from-green-500 to-teal-500",
      extraInfo: "Led the DSA team and organized a 21-day coding challenge to improve problem-solving skills among club members. Collaborated with team members to design engaging challenges and provide participant support throughout the event."
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Achievements
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`p-6 rounded-xl shadow-lg bg-gradient-to-r ${achievement.bgColor} flex items-center space-x-6 transform hover:scale-105 transition duration-300`}
          >
            <div className="p-4 bg-black bg-opacity-20 rounded-full">{achievement.icon}</div>
            <div>
              <h2 className="text-2xl font-bold">{achievement.title}</h2>
              <p className="text-gray-200">{achievement.subtitle}</p>
              {achievement.extraInfo && (
                <p className="text-gray-300 mt-2">{achievement.extraInfo}</p>
              )}
              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-white bg-black bg-opacity-30 px-3 py-1 rounded-md hover:bg-opacity-50 transition duration-300"
                >
                  {achievement.linkText}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;
