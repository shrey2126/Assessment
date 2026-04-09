import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [worksOpen, setWorksOpen] = useState(false);
  const location = useLocation();
  const worksCloseTimer = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      setWorksOpen(false);
    }, 0);

    return () => {
      clearTimeout(timer);
      if (worksCloseTimer.current) window.clearTimeout(worksCloseTimer.current);
    };
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;
  const isWorksActive = () => location.pathname.startsWith('/works');

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 animate-fade-in-up-blur">
      <div className="site-container pt-4">
        <div className="flex items-center justify-between">
          {/* Spacer (keeps pill centered on desktop) */}
          <div className="hidden md:block w-40" />

          {/* Pill nav */}
          <div className="flex-1 flex justify-center">
            <div className="glass-effect rounded-full px-4 py-2 md:px-6 md:py-3 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="hidden md:flex items-center gap-10">
                <Link
                  to="/"
                  className={`font-inter text-sm md:text-base transition-all duration-300 relative group ${isActive('/') ? 'text-primary-white font-semibold' : 'text-primary-white/60 hover:text-primary-white'
                    }`}
                >
                  Home
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-olive transition-all duration-300 ${isActive('/') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>

                <div
                  className="relative"
                  onMouseEnter={() => {
                    if (worksCloseTimer.current) window.clearTimeout(worksCloseTimer.current);
                    setWorksOpen(true);
                  }}
                  onMouseLeave={() => {
                    worksCloseTimer.current = window.setTimeout(() => setWorksOpen(false), 120);
                  }}
                >
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 font-inter text-sm md:text-base transition-all duration-300 relative group ${isWorksActive() ? 'text-primary-white font-semibold' : 'text-primary-white/60 hover:text-primary-white'
                      }`}
                    aria-haspopup="menu"
                    aria-expanded={worksOpen}
                    onClick={() => setWorksOpen((v) => !v)}
                  >
                    Works
                    <Icon
                      name="chevronDown"
                      className={`w-4 h-4 transition-transform duration-300 ${worksOpen ? 'rotate-180' : 'rotate-0'}`}
                    />
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-olive transition-all duration-300 ${isWorksActive() ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </button>

                  {worksOpen && (
                    <div
                      role="menu"
                      className="absolute left-1/2 -translate-x-1/2 mt-3 w-48 rounded-2xl glass-effect overflow-hidden border border-white/10 animate-fade-in-up-blur"
                    >
                      <Link
                        to="/works"
                        role="menuitem"
                        className={`block px-4 py-3 font-inter text-sm transition-all duration-300 hover:bg-white/5 hover:translate-x-1 ${isActive('/works') ? 'text-primary-white' : 'text-primary-white/70 hover:text-primary-white'
                          }`}
                      >
                        Works
                      </Link>
                      <Link
                        to="/works/products"
                        role="menuitem"
                        className={`block px-4 py-3 font-inter text-sm transition-all duration-300 hover:bg-white/5 hover:translate-x-1 ${isActive('/works/products') ? 'text-primary-white' : 'text-primary-white/70 hover:text-primary-white'
                          }`}
                      >
                        Products
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  to="/about"
                  className={`font-inter text-sm md:text-base transition-all duration-300 relative group ${isActive('/about') ? 'text-primary-white font-semibold' : 'text-primary-white/60 hover:text-primary-white'
                    }`}
                >
                  About
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-olive transition-all duration-300 ${isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>

                <Link
                  to="/contact"
                  className={`font-inter text-sm md:text-base transition-all duration-300 relative group ${isActive('/contact') ? 'text-primary-white font-semibold' : 'text-primary-white/60 hover:text-primary-white'
                    }`}
                >
                  Contact
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-olive transition-all duration-300 ${isActive('/contact') ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              </div>

              {/* Mobile compact pill */}
              <div className="md:hidden flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setIsOpen((v) => !v)}
                  className="text-primary-white/80 hover:text-primary-white transition-all duration-300 hover:rotate-90"
                  aria-label="Toggle menu"
                >
                  <Icon name={isOpen ? 'close' : 'menu'} className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block w-40" />
        </div>

        {/* Mobile menu panel */}
        {isOpen && (
          <div className="md:hidden mt-3 glass-effect rounded-2xl border border-white/10 overflow-hidden animate-slide-up">
            <div className="p-4 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-xl font-inter text-sm transition-all duration-300 hover:translate-x-1 ${isActive('/') ? 'text-primary-white bg-white/5' : 'text-primary-white/80 hover:text-primary-white hover:bg-white/5'
                  }`}
              >
                Home
              </Link>

              <button
                type="button"
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl font-inter text-sm transition-all duration-300 ${isWorksActive() ? 'text-primary-white bg-white/5' : 'text-primary-white/80 hover:text-primary-white hover:bg-white/5'
                  }`}
                onClick={() => setWorksOpen((v) => !v)}
                aria-expanded={worksOpen}
              >
                <span>Works</span>
                <Icon name="chevronDown" className={`w-4 h-4 transition-transform duration-300 ${worksOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>

              {worksOpen && (
                <div className="pl-3 animate-fade-in">
                  <Link
                    to="/works"
                    className={`block px-3 py-2 rounded-xl font-inter text-sm transition-all duration-300 hover:translate-x-1 ${isActive('/works') ? 'text-primary-white' : 'text-primary-white/70 hover:text-primary-white'
                      }`}
                  >
                    Works
                  </Link>
                  <Link
                    to="/works/products"
                    className={`block px-3 py-2 rounded-xl font-inter text-sm transition-all duration-300 hover:translate-x-1 ${isActive('/works/products') ? 'text-primary-white' : 'text-primary-white/70 hover:text-primary-white'
                      }`}
                  >
                    Products
                  </Link>
                </div>
              )}

              <Link
                to="/about"
                className={`block px-3 py-2 rounded-xl font-inter text-sm transition-all duration-300 hover:translate-x-1 ${isActive('/about') ? 'text-primary-white bg-white/5' : 'text-primary-white/80 hover:text-primary-white hover:bg-white/5'
                  }`}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-xl font-inter text-sm transition-all duration-300 hover:translate-x-1 ${isActive('/contact') ? 'text-primary-white bg-white/5' : 'text-primary-white/80 hover:text-primary-white hover:bg-white/5'
                  }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
