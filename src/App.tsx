import { usePortfolioData } from './hooks/usePortfolioData';
import { Navigation } from './components/Navigation';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  const { data, loading, error } = usePortfolioData();

  console.log('Portfolio Data:', data);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-gray-400 text-lg">Loading...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-red-400 text-lg">Error loading portfolio data</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation name={data.name} />
      <main className="max-w-4xl mx-auto px-6 pt-20">
        <About name={data.name} title={data.title} about={data.about} />
        <Skills skills={data.skills} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Contact socials={data.socials} />
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-800 mt-20">
          © {new Date().getFullYear()} {data.name}
        </footer>
      </main>
    </div>
  );
}

export default App;
