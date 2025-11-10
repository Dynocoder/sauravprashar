import { TypewriterSequence } from './TypewriterSequence';
import { TypewriterAction } from '../types';

interface AboutProps {
  name: string;
  typewriterSequences?: TypewriterAction[];
}

export const About = ({ name, typewriterSequences }: AboutProps) => {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          {name}
        </h1>
        {typewriterSequences && typewriterSequences.length > 0 ? (
          <div className="mb-2 text-xl md:text-2xl text-gray-400">
            <TypewriterSequence
              sequences={typewriterSequences}
              className="text-xl md:text-2xl text-gray-400"
            />
          </div>
        ) : (
          <p className="text-xl md:text-2xl text-gray-400">Software Developer</p>
        )}
      </div>
    </section>
  );
};
