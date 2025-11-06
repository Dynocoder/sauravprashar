interface AboutProps {
  name: string;
  title: string;
  about: string;
}

export const About = ({ name, title, about }: AboutProps) => {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="w-full">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          {name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">{title}</p>
        <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
          {about}
        </p>
      </div>
    </section>
  );
};
