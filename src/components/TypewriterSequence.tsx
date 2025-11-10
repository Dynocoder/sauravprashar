import TypeWriter from 'typewriter-effect';
import { TypewriterAction } from '../types';

interface TypewriterSequenceProps {
  sequences: TypewriterAction[];
  className?: string;
}

export const TypewriterSequence = ({ sequences }: TypewriterSequenceProps) => {
  return (
    <TypeWriter
      onInit={(typewriter) => {
        sequences.forEach((action) => {
          switch (action.type) {
            case 'type':
              if (action.text) {
                typewriter.typeString(action.text);
              }
              break;
            case 'deleteAll':
              typewriter.deleteAll();
              break;
            case 'deleteChars':
              if (action.count !== undefined) {
                typewriter.deleteChars(action.count);
              }
              break;
            case 'pause':
              typewriter.pauseFor(action.duration || 1000);
              break;
          }
        });
        typewriter.start();
      }}
      options={{
        loop: true,
        delay: 75,
        deleteSpeed: 30
      }}
    />
  )
};
