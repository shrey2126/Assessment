import { useState, useEffect } from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import useCountUp from '../hooks/useCountUp';
import Reveal from '../components/Reveal';
import ProcessSteps from '../components/ProcessSteps';
import CTASection from '../components/CTASection';

const About = () => {
  const [heroIn, setHeroIn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroIn(true), 80);
    return () => clearTimeout(t);
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
      details: 'During this initial consultation, we will discuss your project requirements, timeline, budget, and creative vision to ensure alignment.',
    },
    {
      num: '2',
      title: 'Project Brief',
      desc: 'Comprehensive planning phase where we outline creative direction, shot list, styling requirements, and timeline to ensure flawless execution.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
      details: 'We create a detailed project brief covering all aspects of the shoot including locations, props, styling, and deliverables.',
    },
    {
      num: '3',
      title: 'Shoot',
      desc: 'Professional photography session with meticulous attention to lighting, composition, and storytelling to capture your vision perfectly.',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
      details: 'On shoot day, we bring your vision to life with professional equipment, expert lighting, and careful attention to every detail.',
    },
    {
      num: '4',
      title: 'Delivery',
      desc: 'Receive professionally edited, high-resolution images optimized for your specific needs and ready for immediate use.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop',
      details: 'Final images are professionally edited, color-corrected, and delivered in your preferred format with full usage rights.',
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
    <div className="min-h-screen section-base">

      {/* ── HERO: text slides from left, portrait slides from right ── */}
      <section className="pt-24 pb-16 site-container">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left — text, slides in from left on mount */}
            <div
              className="transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                opacity: heroIn ? 1 : 0,
                transform: heroIn ? 'translateX(0)' : 'translateX(-60px)',
              }}
            >
              <h1 className="display-title font-libre-caslon mb-6">
                Behind the{' '}
                <span className="inline-flex items-center mx-1">
                  <span className="w-9 h-9 bg-primary-olive rounded-full inline-block animate-morph" />
                </span>{' '}
                <span className="italic text-shimmer">Lens</span>
              </h1>
              <p className="lead-copy">
                I'm a photographer focused on capturing real moments — the kind that feel honest, unforced, and true to the people in them.
              </p>
            </div>

            {/* Right — portrait, slides in from right on mount */}
            <div
              className="transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                opacity: heroIn ? 1 : 0,
                transform: heroIn ? 'translateX(0)' : 'translateX(60px)',
                transitionDelay: '150ms',
              }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=900&fit=crop"
                  alt="Portrait"
                  className="w-full h-[420px] md:h-[520px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOURNEY: centered title + centered body text ── */}
      <section className="py-20 md:py-32 site-container section-dark">
        <div className="w-full max-w-4xl mx-auto text-center">

          <Reveal>
            <h2 className="section-title md:text-6xl font-libre-caslon mb-10">
              A <span className="italic">Journey</span> Into Photography
            </h2>
          </Reveal>

          <Reveal delayMs={100}>
            <p className="lead-copy">
              When he's not behind the camera or refining images in post-production, Chirag finds inspiration in quieter moments — practicing origami, the Japanese art of paper folding, or taking long walks through the city, observing the details that often go unnoticed.
            </p>
          </Reveal>

        </div>
      </section>

      {/* ── PROCESS: title slides from left, steps fade up staggered ── */}
      <section className="py-16 md:py-24 site-container section-base">
        <div className="w-full">
          <Reveal direction="left">
            <h2 className="section-title italic mb-3">
              Process
            </h2>
          </Reveal>
          <Reveal delayMs={80}>
            <p className="body-copy mb-10 max-w-2xl">
              We think successful outcomes stem from clear communication and a unified vision, ensuring alignment from our initial discussion to the final delivery.
            </p>
          </Reveal>
          <ProcessSteps steps={processSteps} renderSection={false} />
        </div>
      </section>

      {/* ── STATS: headline fades up, counters stagger in ── */}
      <section className="py-16 md:py-24 site-container section-dark">
        <div className="w-full">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-primary-white mb-14 leading-tight">
              {/* Mobile: each phrase on its own line */}
              <span className="block md:hidden">
                Dedicated to{' '}
                <span className="font-libre-caslon italic">transforming</span>
                <br />
                perspectives through
                <br />
                high-end <span className="font-libre-caslon italic">visual</span>
                <br />
                storytelling.
              </span>
              {/* Desktop: 2 natural lines */}
              <span className="hidden md:block">
                Dedicated to <span className="font-libre-caslon italic">transforming</span> perspectives
                <br />
                through high-end <span className="font-libre-caslon italic">visual</span> storytelling.
              </span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mt-14">
            <Reveal delayMs={0}>
              <div ref={brandsRef} className="p-4">
                <div className="text-6xl md:text-6xl font-libre-caslon italic text-primary-white mb-1">{brandsCount}+</div>
                <div className="text-sm font-inter text-primary-muted tracking-widest">Brands</div>
              </div>
            </Reveal>
            <Reveal delayMs={80}>
              <div ref={shootsRef} className="p-4">
                <div className="text-6xl md:text-6xl font-libre-caslon italic text-primary-white mb-1">{shootsCount}+</div>
                <div className="text-sm font-inter text-primary-muted tracking-widest">PhotoShoots</div>
              </div>
            </Reveal>
            <Reveal delayMs={160}>
              <div ref={yearsRef} className="p-4">
                <div className="text-6xl md:text-6xl font-libre-caslon italic text-primary-white mb-1">{yearsCount}+</div>
                <div className="text-sm font-inter text-primary-muted tracking-widest">Years Experience</div>
              </div>
            </Reveal>
            <Reveal delayMs={240}>
              <div ref={awardsRef} className="p-4">
                <div className="text-6xl md:text-6xl font-libre-caslon italic text-primary-white mb-1">{awardsCount}+</div>
                <div className="text-sm font-inter text-primary-muted tracking-widest">Awards Won</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title="Ready to bring your vision to life?"
        subtitle="High-end visual content for brands, businesses, and agencies — from stills to motion."
        buttonText="Get In Touch"
        buttonLink="/contact"
        variant="withImages"
        cornerImages={ctaImages}
        sectionBg="section-base"
      />
    </div>
  );
};

export default About;
