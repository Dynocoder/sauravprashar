import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Experience as ExperienceType } from '../types';
import { ExpandableDescription } from './ExpandableDescription';
import { useIsMobile } from '../hooks/useIsMobile';

interface ExperienceProps {
  experience: ExperienceType[];
}

export const Experience = ({ experience }: ExperienceProps) => {
  const isMobile = useIsMobile();
  const [globalExpanded, setGlobalExpanded] = useState(!isMobile);

  // Update globalExpanded when screen size changes
  useEffect(() => {
    setGlobalExpanded(!isMobile);
  }, [isMobile]);

  return (
    <section id="experience" className="py-20">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold text-white">Experience</h2>
        <button
          onClick={() => setGlobalExpanded(!globalExpanded)}
          className="flex items-center text-sm text-gray-400 hover:text-gray-300 transition-colors"
        >
          {globalExpanded ? (
            <>
              <span>Collapse All</span>
              <ChevronUp size={16} className="ml-1" />
            </>
          ) : (
            <>
              <span>Expand All</span>
              <ChevronDown size={16} className="ml-1" />
            </>
          )}
        </button>
      </div>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div key={index} className="border-l-2 border-gray-700 pl-6">
            <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
            <p className="text-gray-400 mb-2">
              {exp.company} · {exp.period}
            </p>
            <ExpandableDescription
              shortDescription={exp.description}
              longDescription={exp.longDescription}
              defaultExpanded={globalExpanded}
              forceCollapsed={false}
            />

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
