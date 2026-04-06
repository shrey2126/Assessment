import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '../components/Button';
import Icon from '../components/Icon';
import ProcessSteps from '../components/ProcessSteps';
import FAQAccordion from '../components/FAQAccordion';
import ImageGrid from '../components/ImageGrid';
import CTASection from '../components/CTASection';
import Reveal from '../components/Reveal';
import ThreeRowScrollGallery from '../components/ThreeRowScrollGallery';
import OccludedCarousel from '../components/OccludedCarousel';
import Marquee from '../components/Marquee';

const Home = () => {
  const [heroEntered, setHeroEntered] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setHeroEntered(true), 80);
    return () => clearTimeout(t);
  }, []);

  const galleryImages = [
    'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1559847844-5315695dadae?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=300&fit=crop',
  ];

  const heroInlineImages = [
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=150&h=150&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=150&h=150&fit=crop',
  ];

  const carouselImages = [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&h=300&fit=crop',
  ];

  const visualNotesImages = [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500&h=500&fit=crop',
  ];

  const ctaImages = [
    'https://images.unsplash.com/photo-1559847844-5315695dadae?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=300&fit=crop',
  ];

  const bottomImages = [
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=300&h=300&fit=crop',
  ];

  const processSteps = [
    { num: '1', title: 'Schedule a Call', desc: 'Initial discovery call to understand your vision and goals.', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop', details: "Let's connect for a brief discovery call to explore your vision, discuss your goals, and ensure we're a perfect creative match for your project." },
    { num: '2', title: 'Project Brief', desc: 'Detailed planning and creative direction alignment.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop', details: 'Comprehensive planning phase where we outline creative direction, shot list, styling requirements, and timeline to ensure flawless execution.' },
    { num: '3', title: 'Shoot', desc: 'Professional photography with meticulous attention to detail.', image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop', details: 'Professional photography session with meticulous attention to lighting, composition, and storytelling to capture your vision perfectly.' },
    { num: '4', title: 'Delivery', desc: 'Edited, high-resolution images ready for use.', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop', details: 'Receive professionally edited, high-resolution images optimized for your specific needs and ready for immediate use.' },
  ];

  const faqItems = [
    'How do you price your projects?',
    'What should I expect from a photoshoot?',
    'How long does a typical session take?',
    'What props and styling do you provide?',
    'How long does it take to deliver the final images?',
    'How can I customize my service needs?',
  ];

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      <div className="relative z-10">
        {/* Hero - Three Row Scrolling Gallery - Full Width */}
        <section className="pt-6 md:pt-10 pb-6">
          <div className="w-full">
            <Reveal>
              <ThreeRowScrollGallery images={galleryImages} />
            </Reveal>
          </div>
        </section>

        {/* Main Headline with overlapping images */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${heroEntered ? 'animate-hero-entrance opacity-100' : 'opacity-0'}`}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-libre-caslon text-primary-white leading-tight">
              I capture{' '}
              <span className="inline-flex items-center gap-0 mx-1 animate-bounce-in relative" style={{ animationDelay: '0.3s' }}>
                {heroInlineImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt=""
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer shadow-lg"
                    style={{
                      marginLeft: idx > 0 ? '-12px' : '0',
                      zIndex: heroInlineImages.length - idx,
                    }}
                  />
                ))}
              </span>{' '}
              <span className="italic text-shimmer">moments</span> with intent,
              <br className="hidden sm:block" />
              blending <span className="italic hover:text-primary-olive transition-colors duration-300 cursor-pointer">vision</span> and craft to tell visual
              <br className="hidden sm:block" />
              <span className="italic inline-block relative group cursor-pointer">
                stories
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-olive/80 rounded-full transition-all duration-300 group-hover:h-1 group-hover:bg-primary-olive" style={{ transform: 'scaleX(1.02)' }} />
              </span>
            </h1>
          </div>
        </section>

        {/* Occluded Carousel - Horizontal scrolling with dotted line */}
        <section className="py-8 px-0">
          <div className="w-full">
            <Reveal delayMs={150}>
              <OccludedCarousel images={carouselImages} />
            </Reveal>
          </div>
        </section>

        {/* Featured Works — heading from left, image from left, text from right */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 section-dark/95">
          <div className="max-w-6xl mx-auto">
            <Reveal direction="left" durationMs={900}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter text-primary-white mb-12">
                Featured <span className="font-libre-caslon italic">Works</span> For Our Incredible <span className="font-libre-caslon italic">Clients</span>
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <Reveal direction="left" distance={70} durationMs={1000}>
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop"
                    alt="F&B Restaurant"
                    className="w-full h-[400px] md:h-[500px] object-cover img-hover-luxury"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Reveal>
              <Reveal direction="right" distance={70} delayMs={100} durationMs={1000}>
                <div className="space-y-6">
                  <h3 className="text-4xl md:text-5xl font-libre-caslon text-primary-white">F&B</h3>
                  <p className="text-lg font-inter text-primary-muted leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur. Consequat enim pulvinar aliquam adipiscing vel cursus habitasse odio ridiculus.
                  </p>
                  <Link to="/works">
                    <Button variant="primary" className="uppercase tracking-wider">
                      View Project
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* About Me — text from left, image from right */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 section-base">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <Reveal direction="left" distance={60} durationMs={950}>
                <div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-libre-caslon text-primary-white mb-6">
                    About <span className="italic">Me</span>
                  </h2>
                  <p className="text-lg font-inter text-primary-muted leading-relaxed mb-8">
                    I am a visual storyteller working across photography, film, and motion. I collaborate with brands, agencies, and individuals to create imagery that feels intentional, polished, and authentic.
                  </p>
                  <Link to="/about">
                    <Button variant="primary" className="uppercase tracking-wider">
                      Read More
                    </Button>
                  </Link>
                </div>
              </Reveal>
              <Reveal direction="right" distance={60} delayMs={120} durationMs={950}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop"
                    alt="About Me"
                    className="w-full h-[500px] md:h-[600px] object-cover img-hover-luxury"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Process — heading from right, steps stagger up */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 section-dark">
          <div className="max-w-4xl mx-auto">
            <Reveal direction="right" durationMs={900}>
              <h2 className="text-4xl md:text-5xl font-libre-caslon italic text-primary-white mb-4">
                Process
              </h2>
              <p className="text-lg font-inter text-primary-muted mb-12 leading-relaxed">
                We think successful outcomes stem from clear communication and a unified vision, ensuring alignment from our initial discussion to the final delivery.
              </p>
            </Reveal>
            <ProcessSteps steps={processSteps} variant="compact" renderSection={false} />
          </div>
        </section>

        {/* FAQs — heading from left, image from left, accordion from right */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 section-base">
          <div className="max-w-6xl mx-auto">
            <Reveal direction="left" durationMs={900}>
              <h2 className="text-4xl md:text-5xl font-libre-caslon italic text-primary-white mb-3">
                FAQs
              </h2>
              <p className="text-base font-inter text-primary-muted mb-10 leading-relaxed max-w-xl">
                Curious about collaborating? Here are some helpful answers to your FAQs,<br className="hidden sm:block" /> designed to simplify the process!
              </p>
            </Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <Reveal direction="left" distance={65} durationMs={1000}>
                <div className="rounded-2xl overflow-hidden" style={{ height: '420px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=900&fit=crop"
                    alt="FAQ"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal direction="right" distance={65} delayMs={100} durationMs={1000}>
                <FAQAccordion items={faqItems} itemsOnly />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Visual Notes — heading from up, grid items stagger */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 section-dark">
          <div className="max-w-6xl mx-auto">
            <Reveal direction="up" durationMs={900}>
              <h2 className="text-4xl md:text-5xl font-libre-caslon italic text-primary-white mb-4">
                Visual / <span className="not-italic">Notes</span>
              </h2>
              <p className="text-lg font-inter text-primary-muted mb-12 leading-relaxed">
                Ongoing stories, experiments, and moments shared in real time on Instagram.
              </p>
            </Reveal>
            <Reveal direction="up" delayMs={80} durationMs={950}>
              <ImageGrid images={visualNotesImages} columns={3} />
            </Reveal>
            <Reveal direction="up" delayMs={180} durationMs={900}>
              <div className="text-center mt-8">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button variant="primary" className="tracking-wider">
                    <span className="flex items-center gap-2">
                      <Icon name="instagram" className="w-5 h-5" />
                      Follow on Instagram
                    </span>
                  </Button>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-12 md:py-16 px-0 overflow-hidden section-dark">
          <Marquee speed={40} className="py-4">
            <span className="inline-flex items-center gap-6 mx-6">
              <span className="text-primary-white/90 font-libre-caslon text-xl md:text-2xl italic hover:text-shimmer transition-all duration-300">Where your ideas</span>
              {bottomImages.slice(0, 4).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt=""
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover flex-shrink-0 hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer"
                />
              ))}
              <span className="text-primary-white/90 font-libre-caslon text-xl md:text-2xl italic hover:text-shimmer transition-all duration-300">meet in</span>
              {bottomImages.map((img, idx) => (
                <img
                  key={`b-${idx}`}
                  src={img}
                  alt=""
                  className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover flex-shrink-0 hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer"
                />
              ))}
              <span className="text-primary-white/90 font-libre-caslon text-xl md:text-2xl italic hover:text-shimmer transition-all duration-300">storytelling</span>
            </span>
          </Marquee>
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
    </div>
  );
};

export default Home;
