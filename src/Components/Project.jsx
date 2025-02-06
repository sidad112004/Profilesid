import React from 'react';

const projects = [
  {
    id: 'my_modal_5',
    title: 'Api-Hub',
    description: 'Developed an API platform for developers to access pre-built APIs and create custom endpoints, enabling users to generate tailored APIs with custom fields and JSON data, reducing search time across platforms.',
    githubLink: 'https://github.com/sidad112004/Api-point',
    videoLink: 'https://www.youtube.com/watch?v=oyZoZaDrcbI', // Demo link
    technologies: [' Next.js', 'TypeScript', 'PostgreSQL ', 'Prisma', 'NextAuth'],
  },
  {
    id: 'my_modal_6',
    title: 'Feedback Analyzer ',
    description: 'Developed a web application that collects client feedback and analyzes it using machine learning to categorize feedback as good, bad, or neutral, providing insights to the user.',
    githubLink: 'https://github.com/AdityaKhatavkar/Feedback_Analyzer',
    // videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Demo link
    technologies: ['React', 'Node.js', 'MongoDB', 'Machine Learning (collaborated)','User authentication using cookies'],
  },
  {
    id: 'my_modal_7',
    title: 'Other Project : Tour and Travel Agency, TextUtilize & NewsApp, Note App   ',
    description: 'various other projects cpp, python, web development, etc.',
    githubLink: 'https://github.com/sidad112004',
    // videoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 
    technologies: ['Full Stack', 'MERN', 'Nextjs', 'Python','c++'],
  },
];

function Project() {
  return (
    <div className="w-full py-12 bg-gradient-to-b from-base-200 to-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 to-teal-400 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Explore my technical implementations and creations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="group relative">
              <div className="card bg-gradient-to-r from-sky-400 via-sky-300 to-sky-200 text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-2">
                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold text-white">{project.title}</h2>
                  <p className="text-gray-900 mb-4">{project.description}</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn btn-outline btn-light hover:btn-primary transition-colors bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                      onClick={() => document.getElementById(project.id).showModal()}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal */}
              <dialog id={project.id} className="modal">
                <div className="modal-box max-w-2xl bg-base-100 dark:bg-base-200 rounded-xl p-8">
                  <h3 className="font-bold text-3xl mb-4 text-gray-800 dark:text-gray-100">{project.title}</h3>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 mb-6"
                  >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="text-gray-800 dark:text-gray-100">View on GitHub</span>
                  </a>

                  {/* Video Link */}
                  {project.videoLink && (
                    <div className="my-4">
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3">Project Demo</h4>
                      <a
                        href={project.videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        <span className="text-gray-800 dark:text-gray-100">Watch Demo</span>
                      </a>
                    </div>
                  )}

                  <div className="border-t border-b border-gray-200 dark:border-gray-700 py-4 my-4">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="badge badge-outline badge-lg bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="modal-action">
                    <button
                      className="btn btn-ghost text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => document.getElementById(project.id).close()}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </dialog>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
