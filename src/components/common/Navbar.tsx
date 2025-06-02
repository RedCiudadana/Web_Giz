import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Database, BookOpen, Users } from 'lucide-react';
import { cn } from '../../utils/cn';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Datos Abiertos', path: '/datos-abiertos', icon: <Database size={18} /> },
    { name: 'Talleres', path: '/talleres', icon: <BookOpen size={18} /> },
    { name: 'Participa', path: '/participa', icon: <Users size={18} /> },
  ];

  return (
    <nav 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 bg-white shadow-md',
        isScrolled ? 'py-2' : 'py-4'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <img 
              src="https://www.redciudadana.org/assets/img/red/LOGO-RED_NEGRO.png" 
              alt="Logo" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => cn(
                  'font-medium transition-all duration-200 flex items-center gap-1 py-2 px-3 rounded-lg',
                  isActive 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                )}
                end={item.path === '/'}
              >
                {item.icon && item.icon}
                {item.name}
              </NavLink>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-neutral-700 hover:text-primary-600 focus:outline-none"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-down">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => cn(
                    'font-medium py-2 px-4 rounded-lg transition-all duration-200 flex items-center gap-2',
                    isActive 
                      ? 'bg-primary-50 text-primary-600' 
                      : 'text-neutral-700 hover:bg-neutral-50 hover:text-primary-600'
                  )}
                  onClick={closeMenu}
                  end={item.path === '/'}
                >
                  {item.icon && item.icon}
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;