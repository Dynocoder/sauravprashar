import { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experience: ExperienceType[];
}

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-700 pl-6">
            <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
            <p className="text-gray-400 mb-2">
              {exp.company} · {exp.period}
            </p>
            <p className="text-gray-300 leading-relaxed">{exp.description}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills && exp.skills.map((skill) => (
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
