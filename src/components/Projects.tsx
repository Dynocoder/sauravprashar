import { ExternalLink, GithubIcon } from 'lucide-react';
import { Project as ProjectType } from '../types';

interface ProjectsProps {
  projects: ProjectType[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-white mb-12">Projects</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <div className="flex items-center">
                {project.deployment_link && (
                  <a
                    href={project.deployment_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors mr-4"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
                {project.github_link && (
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <GithubIcon size={20} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
