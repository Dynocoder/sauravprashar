interface SkillsProps {
  skills: {
    [category: string]: string[];
  };
}

export const Skills = ({ skills }: SkillsProps) => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-white mb-12">Skills</h2>
      <div className="space-y-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gray-800 text-gray-300 rounded-md text-sm border border-gray-700"
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
