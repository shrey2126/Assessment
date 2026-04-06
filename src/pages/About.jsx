import { useState, useEffect } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import useCountUp from '../hooks/useCountUp';
import Reveal from '../components/Reveal';
import ProcessSteps from '../components/ProcessSteps';
import CTASection from '../components/CTASection';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const [brandsCount, brandsRef] = useCountUp(6);
  const [shootsCount, shootsRef] = useCountUp(20);
  const [yearsCount, yearsRef] = useCountUp(12);
  const [awardsCount, awardsRef] = useCountUp(15);

  const processSteps = [
    { 
      num: '1', 
      title: 'Schedule a Call', 
      desc: "Let's connect for a brief discovery call to explore your vision, discuss your goals, and ensure we're a perfect creative match for your project.",
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop',
      details: 'During this initial consultation, we will discuss your project requirements, timeline, budget, and creative vision to ensure alignment.'
    },
    { 
      num: '2', 
      title: 'Project Brief', 
      desc: 'Comprehensive planning phase where we outline creative direction, shot list, styling requirements, and timeline to ensure flawless execution.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
      details: 'We create a detailed project brief covering all aspects of the shoot including locations, props, styling, and deliverables.'
    },
    { 
      num: '3', 
      title: 'Shoot', 
      desc: 'Professional photography session with meticulous attention to lighting, composition, and storytelling to capture your vision perfectly.',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
      details: 'On shoot day, we bring your vision to life with professional equipment, expert lighting, and careful attention to every detail.'
    },
    { 
      num: '4', 
      title: 'Delivery', 
      desc: 'Receive professionally edited, high-resolution images optimized for your specific needs and ready for immediate use.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop',
      details: 'Final images are professionally edited, color-corrected, and delivered in your preferred format with full usage rights.'
    },
  ];

  const ctaImages = [
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1559847844-5315695dadae?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=300&fit=crop',
  ];

  return (
    <div className="min-h-screen bg-[#1a2410]">
      {/* Hero Section - Behind the Lens */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-libre-caslon text-primary-white mb-8 leading-tight">
                Behind the <span className="inline-flex items-center mx-2 animate-pulse-glow">
                  <span className="w-10 h-10 md:w-12 md:h-12 bg-primary-olive rounded-full inline-block animate-morph"></span>
                </span>
                <span className="italic text-shimmer">Lens</span>
              </h1>
              <p className="text-lg md:text-xl font-inter text-primary-muted leading-relaxed animate-fade-in-up-blur" style={{ animationDelay: '0.3s' }}>
                I'm a photographer focused on capturing real moments — the kind that feel honest, unforced, and true to the people in them.
              </p>
            </div>

            {/* Right side - Image */}
            <div className={`relative transform transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '200ms' }}>
              <div className="relative rounded-2xl overflow-hidden transform transition-all duration-700 hover:scale-105 hover:rotate-1 hover-lift group">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=900&fit=crop"
                  alt="Portrait" 
                  className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0f1a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-libre-caslon text-primary-white mb-12 text-center transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            A <span className="italic text-shimmer">Journey</span> Into Photography
          </h2>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-lg md:text-xl font-inter text-primary-muted leading-relaxed animate-fade-in-up-blur" style={{ animationDelay: '0.2s' }}>
              When he's not behind the camera or refining images in post-production, Chirag finds inspiration in quieter moments — practicing origami, the Japanese art of paper folding, or taking long walks through the city, observing the details that often go unnoticed.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#1a2410]">
        <div className="max-w-6xl mx-auto">
          {/* Large Image */}
          <div className="mb-12 rounded-2xl overflow-hidden img-hover-luxury animate-fade-in-up-blur">
            <img 
              src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1400&h=600&fit=crop"
              alt="Photographer at work" 
              className="w-full h-[400px] md:h-[500px] object-cover" 
            />
          </div>

          <ProcessSteps 
            steps={processSteps}
            renderSection={false}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0f1a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-libre-caslon text-primary-white mb-4 text-left md:text-center">
            Dedicated to <span className="italic">transforming</span> perspectives
          </h2>
          <p className="text-3xl md:text-4xl font-libre-caslon text-primary-white mb-12 text-left md:text-center">
            through high-end <span className="italic">visual</span> storytelling.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <Reveal delayMs={0}>
              <div ref={brandsRef} className="p-6 transform transition-all duration-700 hover:scale-105">
                <div className="text-5xl md:text-6xl lg:text-7xl font-libre-caslon italic text-primary-white mb-2">
                  {brandsCount}+
                </div>
                <div className="text-base md:text-lg font-inter text-primary-muted">Brands</div>
              </div>
            </Reveal>
            <Reveal delayMs={80}>
              <div ref={shootsRef} className="p-6 transform transition-all duration-700 hover:scale-105">
                <div className="text-5xl md:text-6xl lg:text-7xl font-libre-caslon italic text-primary-white mb-2">
                  {shootsCount}+
                </div>
                <div className="text-base md:text-lg font-inter text-primary-muted">PhotoShoots</div>
              </div>
            </Reveal>
            <Reveal delayMs={160}>
              <div ref={yearsRef} className="p-6 transform transition-all duration-700 hover:scale-105">
                <div className="text-5xl md:text-6xl lg:text-7xl font-libre-caslon italic text-primary-white mb-2">
                  {yearsCount}+
                </div>
                <div className="text-base md:text-lg font-inter text-primary-muted">Years Experience</div>
              </div>
            </Reveal>
            <Reveal delayMs={240}>
              <div ref={awardsRef} className="p-6 transform transition-all duration-700 hover:scale-105">
                <div className="text-5xl md:text-6xl lg:text-7xl font-libre-caslon italic text-primary-white mb-2">
                  {awardsCount}+
                </div>
                <div className="text-base md:text-lg font-inter text-primary-muted">Awards Won</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to bring your vision to life?"
        subtitle="High-end visual content for brands, businesses, and agencies — from stills to motion."
        buttonText="Get In Touch"
        buttonLink="/contact"
        variant="withImages"
        cornerImages={ctaImages}
        sectionBg="bg-[#1a2410]"
      />
    </div>
  );
};

export default About;
