import { Link } from 'react-router-dom';
import Button from './Button';
import Reveal from './Reveal';

const CTASection = ({
  preTitle = '',
  preSubtitle = '',
  subtitle = "Let's create something truly unforgettable.",
  buttonText = 'Contact Me',
  buttonLink = '/contact',
  variant = 'default', // 'default' | 'withImages' | 'minimal'
  cornerImages = [],
  sectionBg = 'section-dark',
}) => {
  return (
    <section className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Corner images - for variant withImages - 2 overlapping pairs on each side */}
          {variant === 'withImages' && cornerImages.length >= 6 && (
            <>
              {/* Mobile: 2 overlapping images at each corner */}
              {/* Top Left */}
              <div className="lg:hidden absolute top-0 left-0 z-10">
                <div className="relative w-20 h-20">
                  <div className="absolute top-0 left-0 w-16 h-16 rounded-xl overflow-hidden shadow-xl">
                    <img src={cornerImages[0]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-5 left-5 w-16 h-16 rounded-xl overflow-hidden shadow-xl">
                    <img src={cornerImages[1]} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              {/* Top Right */}
              <div className="lg:hidden absolute top-0 right-0 z-10">
                <div className="relative w-20 h-20">
                  <div className="absolute top-0 right-0 w-16 h-16 rounded-xl overflow-hidden shadow-xl">
                    <img src={cornerImages[4]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-5 right-5 w-16 h-16 rounded-xl overflow-hidden shadow-xl">
                    <img src={cornerImages[5]} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              {/* Bottom Left */}
              <div className="lg:hidden absolute bottom-0 left-0 z-10">
                <div className="relative w-20 h-20">
                  <div className="absolute bottom-0 left-0 w-16 h-16 rounded-xl overflow-hidden shadow-xl">
                    <img src={cornerImages[2]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-5 left-5 w-16 h-16 rounded-xl overflow-hidden shadow-xl">
                    <img src={cornerImages[3]} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
              {/* Bottom Right */}
              <div className="lg:hidden absolute bottom-0 right-0 z-10">
                <div className="relative w-20 h-20">
                  <div className="absolute bottom-0 right-0 w-16 h-16 rounded-xl overflow-hidden shadow-xl">
                    <img src={cornerImages[0]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-5 right-5 w-16 h-16 rounded-xl overflow-hidden shadow-xl">
                    <img src={cornerImages[1]} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Top Left - 2 overlapping images */}
              <div className="hidden lg:block absolute top-4 left-0 -translate-x-16 xl:-translate-x-20 z-10">
                <div className="relative">
                  <div className="w-28 h-28 xl:w-32 xl:h-32 rounded-2xl overflow-hidden shadow-2xl img-hover-luxury animate-float">
                    <img src={cornerImages[0]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-10 left-10 w-28 h-28 xl:w-32 xl:h-32 rounded-2xl overflow-hidden shadow-2xl img-hover-luxury animate-float-slow" style={{ animationDelay: '0.3s' }}>
                    <img src={cornerImages[1]} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Bottom Left - 2 overlapping images */}
              <div className="hidden lg:block absolute bottom-4 left-0 -translate-x-16 xl:-translate-x-20 z-10">
                <div className="relative">
                  <div className="w-28 h-28 xl:w-32 xl:h-32 rounded-2xl overflow-hidden shadow-2xl img-hover-luxury animate-float-slower" style={{ animationDelay: '0.6s' }}>
                    <img src={cornerImages[2]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-10 left-10 w-28 h-28 xl:w-32 xl:h-32 rounded-2xl overflow-hidden shadow-2xl img-hover-luxury animate-float" style={{ animationDelay: '0.9s' }}>
                    <img src={cornerImages[3]} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Top Right - 2 overlapping images */}
              <div className="hidden lg:block absolute top-4 right-0 translate-x-16 xl:translate-x-20 z-10">
                <div className="relative">
                  <div className="w-28 h-28 xl:w-32 xl:h-32 rounded-2xl overflow-hidden shadow-2xl img-hover-luxury animate-float" style={{ animationDelay: '0.2s' }}>
                    <img src={cornerImages[4]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-10 -left-10 w-28 h-28 xl:w-32 xl:h-32 rounded-2xl overflow-hidden shadow-2xl img-hover-luxury animate-float-slow" style={{ animationDelay: '0.5s' }}>
                    <img src={cornerImages[5]} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Bottom Right - 2 overlapping images (using first 2 images again for 6 total) */}
              <div className="hidden lg:block absolute bottom-4 right-0 translate-x-16 xl:translate-x-20 z-10">
                <div className="relative">
                  <div className="w-28 h-28 xl:w-32 xl:h-32 rounded-2xl overflow-hidden shadow-2xl img-hover-luxury animate-float-slower" style={{ animationDelay: '0.8s' }}>
                    <img src={cornerImages[0]} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute top-10 -left-10 w-28 h-28 xl:w-32 xl:h-32 rounded-2xl overflow-hidden shadow-2xl img-hover-luxury animate-float" style={{ animationDelay: '1.1s' }}>
                    <img src={cornerImages[1]} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="text-center py-28 lg:py-20 relative z-0">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter text-primary-white mb-6 leading-tight">
                Ready to bring your<br />
                <span className="font-libre-caslon italic">vision</span> to <span className="font-libre-caslon italic">life</span>?
              </h2>
              <p className="text-sm md:text-base font-inter text-primary-muted mb-8 max-w-md mx-auto">
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
