'use client';

import { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technical: string;
  client: string;
  url?: string;
  moreProjectsUrl?: string;
}

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Lagoinha Dublin Academy',
      category: 'Brand Design',
      description: 'covering concept, logo, and visual system for a Christian training and education platform.',
      technical: 'End-to-end branding process including brand research, sketching, and visual application across digital materials. Tools used include Adobe Suite for design.',
      client: 'Lagoinha Dublin Church.',
      url: 'https://www.behance.net/gallery/218514493/Lagoinha-Ireland-Academy',
      moreProjectsUrl: 'https://www.behance.net/neexcreative'
    },
    {
      id: 2,
      title: 'Video Production',
      category: 'Video Production',
      description: 'High-end product launch video showcasing features and benefits with cinematic visuals and dynamic motion graphics.',
      technical: 'Shot on RED camera with custom lighting setup. Post-production in Premiere Pro with After Effects integration.',
      client: 'Innovate Products'
    },
    {
      id: 3,
      title: '3D Design',
      category: '3D Design',
      description: 'Character-driven animation for an educational series explaining complex concepts through engaging storytelling.',
      technical: 'Modeled and rigged in Blender, animated in Maya, with compositing in After Effects.',
      client: 'EduMedia Solutions'
    },
    {
      id: 4,
      title: 'Motion Graphics',
      category: 'Motion Graphics',
      description: 'Clean, professional explainer video breaking down complex business processes into simple, engaging visuals.',
      technical: 'Vector animations created in Illustrator and animated in After Effects with custom scripts for efficiency.',
      client: 'Global Finance Group'
    },
    {
      id: 5,
      title: 'Social Media',
      category: 'Social Media',
      description: 'Creative visual effects for a music video, including particle systems, color grading, and composited elements.',
      technical: 'Shot on Blackmagic camera. VFX created using a combination of After Effects, Nuke, and Trapcode Suite.',
      client: 'Rhythm Records'
    },
    {
      id: 6,
      title: 'Photography',
      category: 'Photography',
      description: 'Set of animated templates for social media content, optimized for various platforms and aspect ratios.',
      technical: 'Designed in Figma, animated in After Effects, with expression-driven responsive layouts.',
      client: 'Digital Marketing Agency'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-red-600">Featured</span> Projects
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            A selection of recent work, showcasing expertise and creative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-black border border-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-red-600/20 hover:border-red-600/50 hover:transform hover:scale-105"
              onClick={() => setActiveProject(project)}
            >
              {/* Project thumbnail placeholder */}
              <div className="relative h-48 overflow-hidden">
                {project.id === 1 ? (
                  <img
                    src="/trellobanner.jpg"
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="bg-gradient-to-br from-gray-800 to-black w-full h-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">{project.category}</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-xs">{project.client}</span>
                  <button
                    className="text-red-600 hover:text-red-500 text-sm font-medium"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(project);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {activeProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">
                  <span className="text-red-600">{activeProject.category}:</span> {activeProject.title}
                </h3>
                <button
                  className="text-gray-400 hover:text-white"
                  onClick={() => setActiveProject(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Project image cover */}
              <div className="relative h-64 md:h-80 mb-6 rounded overflow-hidden">
                {activeProject.id === 1 ? (
                  <img
                    src="/trellobanner.jpg"
                    alt={activeProject.title}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="bg-gradient-to-br from-gray-800 to-black w-full h-full flex items-center justify-center">
                    <span className="text-gray-600">Project Preview</span>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Project Overview</h4>
                <p className="text-gray-300 mb-4">{activeProject.description}</p>

                <h4 className="text-lg font-semibold mb-2">Technical Details</h4>
                <p className="text-gray-300 mb-4">{activeProject.technical}</p>

                <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                  <h4 className="text-red-600 font-semibold mb-2">Client</h4>
                  <p className="text-gray-300">{activeProject.client}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
                <div className="flex gap-4">
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-red-500 underline transition"
                  >
                    View Full Project
                  </a>

                  <a
                    href={activeProject.moreProjectsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-red-500 underline transition"
                  >
                    More Projects
                  </a>
                </div>

                <button
                  className="text-sm text-gray-500 hover:text-white transition"
                  onClick={() => setActiveProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
