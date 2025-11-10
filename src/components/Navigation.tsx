import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  name: string;
}

export const Navigation = ({ name }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const menuItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection('about')}
            className="text-lg font-semibold text-white hover:text-gray-300 transition-colors"
          >
            {name}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col gap-4 pt-4">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-gray-400 hover:text-white transition-colors py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
