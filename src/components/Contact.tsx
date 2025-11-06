import { Github, Linkedin, Mail } from 'lucide-react';

interface ContactProps {
  socials: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export const Contact = ({ socials }: ContactProps) => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold text-white mb-12">Contact</h2>
      <div className="flex gap-6">
        {socials.github && (
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Github size={24} />
            <span>GitHub</span>
          </a>
        )}
        {socials.linkedin && (
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
        )}
        {socials.email && (
          <a
            href={`mailto:${socials.email}`}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={24} />
            <span>Email</span>
          </a>
        )}
      </div>
    </section>
  );
};
