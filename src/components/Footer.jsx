import Icon from './Icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-dark border-t border-white/10">
      <div className="site-container py-14 md:py-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Left: tagline */}
          <div className="max-w-xl">
            <p className="section-title font-libre-caslon">
              Refined <span className="italic">visual storytelling</span>
              <br />
              across photography, film, and motion.
            </p>
          </div>

          {/* Right: contact + socials */}
          <div className="lg:text-right space-y-6">
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
