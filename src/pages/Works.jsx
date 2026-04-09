import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Icon from '../components/Icon';
import FAQAccordion from '../components/FAQAccordion';
import ImageGrid from '../components/ImageGrid';
import CTASection from '../components/CTASection';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';
import Lightbox from '../components/Lightbox';
import { projects, visualNotesImages } from '../data/projects';

const Works = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const faqItems = [
    'What equipment do you use for photography?',
    'Can I bring props to my photoshoot?',
    'How do I prepare my files for a photoshoot?',
    'How long does a typical session take?',
    'What should I do if the weather is bad on the day of my shoot?',
    'How can I contact you to book a session or get a quote?',
  ];
  const bottomImages = [
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=300&h=300&fit=crop',
  ];

  const ctaImages = [
    'https://images.unsplash.com/photo-1559847844-5315695dadae?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=300&fit=crop',
  ];



  return (
    <div className="min-h-screen section-base">
      {/* Selected Works */}
      <section className="pt-20 md:pt-24 pb-16 md:pb-24 site-container">
        <div className="w-full">
          <Reveal direction="up" durationMs={900}>
            <h1 className="section-title md:text-6xl font-libre-caslon text-center mb-6">
              Selected <span className="italic">Works</span>
            </h1>
            <p className="lead-copy text-center w-full">
              High-fidelity photography for those who value detail. From unveiling innovations to the timelessness of a product, every frame is a visual adventure.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {projects.slice(0, 6).map((project, idx) => (
              <Reveal key={project.id} direction={idx % 2 === 0 ? 'left' : 'right'} delayMs={idx * 55} durationMs={850}>
                <div
                  onClick={() => setSelectedMedia(project)}
                  className="group block relative aspect-square rounded-xl overflow-hidden img-hover-luxury cursor-pointer"
                >
                  <img
                    src={project.thumb}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-4 left-4">
                      <p className="text-white font-inter text-sm">{project.title}</p>
                    </div>
                  </div>
                  {project.type !== 'image' && (
                    <div className="absolute top-4 right-4 bg-primary-olive text-primary-black px-3 py-1 rounded-full text-xs font-inter font-semibold uppercase">
                      {project.type}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedMedia && (
        <Lightbox
          media={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      )}

      {/* FAQs */}
      <section className="py-16 md:py-24 site-container section-dark">
        <div className="w-full">
          <Reveal direction="left" durationMs={900}>
            <h2 className="section-title italic mb-3">
              FAQs
            </h2>
            <p className="body-copy mb-10 max-w-xl">
              Curious about our process or pricing? Here are some helpful answers to your FAQs, designed to simplify the answers.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <Reveal direction="left" distance={65} durationMs={1000}>
              <div className="rounded-2xl overflow-hidden" style={{ height: '420px' }}>
                <img
                  src="https://images.unsplash.com/photo-1520975916090-3105956dac38?w=800&h=900&fit=crop"
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

      {/* Visual Notes */}
      <section className="py-16 md:py-24 site-container section-base">
        <div className="w-full">
          <Reveal direction="right" durationMs={900}>
            <h2 className="section-title italic mb-4">
              Visual <span className="not-italic">Notes</span>
            </h2>
            <p className="lead-copy mb-12">
              Ongoing works, experiments, and moments shared in real-time on Instagram.
            </p>
          </Reveal>
          <Reveal direction="up" delayMs={80} durationMs={950}>
            <ImageGrid images={visualNotesImages} columns={3} />
          </Reveal>
          <Reveal direction="up" delayMs={180}>
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
      <section className="py-12 md:py-16 px-0 overflow-hidden section-dark">
        <Marquee speed={40} className="py-6">
          <span className="inline-flex items-center gap-10 mx-10">
            <span className="text-primary-white/90 font-inter font-bold text-3xl md:text-5xl transition-all duration-300">Where your <span className="font-libre-caslon italic">ideas</span></span>
            <span className="inline-flex items-center">
              {bottomImages.slice(0, 3).map((img, idx) => (
                <img key={idx} src={img} alt="" className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover flex-shrink-0 border-2 border-white shadow-lg transition-all duration-300 cursor-pointer hover:scale-110"
                  style={{ marginLeft: idx > 0 ? '-16px' : '0', transform: `rotate(${[-6, 0, 6][idx]}deg)`, zIndex: idx === 1 ? 2 : 1 }} />
              ))}
            </span>
            <span className="text-primary-white/90 font-inter font-bold text-3xl md:text-5xl transition-all duration-300">meet in</span>
            <span className="inline-flex items-center">
              {bottomImages.slice(1, 4).map((img, idx) => (
                <img key={idx} src={img} alt="" className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover flex-shrink-0 border-2 border-white shadow-lg transition-all duration-300 cursor-pointer hover:scale-110"
                  style={{ marginLeft: idx > 0 ? '-16px' : '0', transform: `rotate(${[-6, 0, 6][idx]}deg)`, zIndex: idx === 1 ? 2 : 1 }} />
              ))}
            </span>
            <span className="text-primary-white/90 font-inter font-bold text-3xl md:text-5xl transition-all duration-300">storytelling</span>
          </span>
        </Marquee>
      </section>
    </div>
  );
};

export default Works;
