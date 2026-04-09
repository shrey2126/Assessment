import { Link } from 'react-router-dom';
import Button from './Button';
import Reveal from './Reveal';

const CTASection = ({
  preTitle = '',
  preSubtitle = '',
  subtitle = "Let's create something truly unforgettable.",
  buttonText = 'Contact Me',
  buttonLink = '/contact',
  variant = 'default',
  cornerImages = [],
  sectionBg = 'section-dark',
}) => {
  return (
    <section className={`py-16 md:py-24 site-container ${sectionBg} overflow-hidden`}>
      <div className="w-full">
        <div className="relative">

          {variant === 'withImages' && cornerImages.length >= 6 && (
            <>
              {/* Top Left */}
              <div className="absolute top-4 left-0 z-10">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52">
                  <div className="absolute top-0 left-0 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-2xl img-hover-luxury animate-float">
                    <img src={cornerImages[0]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shadow-2xl img-hover-luxury animate-float-slow" style={{ animationDelay: '0.3s' }}>
                    <img src={cornerImages[1]} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Bottom Left */}
              <div className="absolute bottom-4 left-0 z-10">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52">
                  <div className="absolute top-0 left-0 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-2xl img-hover-luxury animate-float-slower" style={{ animationDelay: '0.6s' }}>
                    <img src={cornerImages[2]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shadow-2xl img-hover-luxury animate-float" style={{ animationDelay: '0.9s' }}>
                    <img src={cornerImages[3]} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Top Right */}
              <div className="absolute top-4 right-0 z-10">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52">
                  <div className="absolute top-0 right-0 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-2xl img-hover-luxury animate-float" style={{ animationDelay: '0.2s' }}>
                    <img src={cornerImages[4]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shadow-2xl img-hover-luxury animate-float-slow" style={{ animationDelay: '0.5s' }}>
                    <img src={cornerImages[5]} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Bottom Right */}
              <div className="absolute bottom-4 right-0 z-10">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52">
                  <div className="absolute top-0 right-0 w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-2xl img-hover-luxury animate-float-slower" style={{ animationDelay: '0.8s' }}>
                    <img src={cornerImages[0]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shadow-2xl img-hover-luxury animate-float" style={{ animationDelay: '1.1s' }}>
                    <img src={cornerImages[1]} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="text-center py-40 sm:py-36 lg:py-28 relative z-0">
            <Reveal>
              {preTitle && (
                <p className="text-2xl sm:text-3xl md:text-4xl font-libre-caslon italic text-primary-white mb-2">
                  {preTitle}
                </p>
              )}
              {preSubtitle && (
                <p className="text-lg md:text-xl font-inter text-primary-muted mb-6">
                  {preSubtitle}
                </p>
              )}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-inter text-primary-white mb-6">
                Ready to bring your<br />
                <span className="font-libre-caslon italic">vision</span> to <span className="font-libre-caslon italic">life</span>?
              </h2>
              <p className="body-copy mb-8 max-w-md mx-auto">
                {subtitle}
              </p>
              <Link to={buttonLink}>
                <Button variant="primary" className="uppercase tracking-wider">
                  {buttonText}
                </Button>
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
