import { Link } from 'react-router-dom';
import Icon from './Icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Works', path: '/works' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#0f1a0a] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Left: tagline */}
          <div className="max-w-xl">
            <p className="text-2xl sm:text-3xl md:text-4xl font-libre-caslon text-primary-white leading-tight">
              Refined <span className="italic">visual storytelling</span>
              <br />
              across photography, film, and motion.
            </p>
          </div>

          {/* Right: nav links + contact + socials */}
          <div className="lg:text-right space-y-6">
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-white/80 hover:text-primary-olive font-inter text-sm md:text-base transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="space-y-3 text-sm md:text-base font-inter text-primary-muted">
              <a
                href="mailto:chiragsatikuwar@gmail.com"
                className="inline-flex items-center gap-2 hover:text-primary-olive transition-colors"
              >
                <Icon name="mail" className="w-5 h-5" />
                chiragsatikuwar@gmail.com
              </a>
              <div className="flex lg:justify-end items-start gap-2">
                <Icon name="location" className="w-5 h-5 mt-0.5" />
                <span>236 Brakus Junction, Lawrence 74787</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-5 lg:justify-end text-primary-muted">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-primary-olive transition-colors transform hover:scale-110"
              >
                <Icon name="facebook" className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-primary-olive transition-colors transform hover:scale-110"
              >
                <Icon name="instagram" className="w-5 h-5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="hover:text-primary-olive transition-colors transform hover:scale-110"
              >
                <Icon name="pinterest" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <p className="text-xs md:text-sm font-inter text-primary-muted">
            © {currentYear} Chirag Satikuwar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
