import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
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

  return (
    <div className="min-h-screen bg-[#1a2410]">
      {/* Selected Works */}
      <section className="pt-20 md:pt-24 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-libre-caslon text-primary-white text-center mb-6">
              Selected <span className="italic">Works</span>
            </h1>
            <p className="text-lg font-inter text-primary-muted text-center max-w-3xl mx-auto leading-relaxed">
              High-fidelity photography for those who value detail. From unveiling innovations to the timelessness of a product, every frame is a visual adventure.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {projects.map((project, idx) => (
              <Reveal key={project.id} delayMs={idx * 60}>
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
                  {/* Media type indicator */}
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
      <FAQAccordion
        title="FAQs"
        subtitle="Curious about our process or pricing? Here are some helpful answers to your FAQs, designed to simplify the answers."
        faqImage="https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600&h=800&fit=crop"
        items={faqItems}
        layout="split"
      />

      {/* Visual Notes */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#1a2410]">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-libre-caslon italic text-primary-white mb-4">
              Visual <span className="not-italic">Notes</span>
            </h2>
            <p className="text-lg font-inter text-primary-muted mb-12 leading-relaxed">
              Ongoing works, experiments, and moments shared in real-time on Instagram.
            </p>
          </Reveal>
          <ImageGrid images={visualNotesImages} columns={3} />
          <Reveal delayMs={100}>
            <div className="text-center mt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button variant="primary" className="uppercase tracking-wider">
                  View on Instagram
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to bring your vision to life?"
        subtitle="Let's craft visuals that tell your story. Get in touch to discuss your project, learn more about our services, and begin our creative journey together."
        buttonText="Let's Talk"
        buttonLink="/contact"
      />

      {/* Bottom marquee */}
      <section className="py-12 md:py-16 px-0 overflow-hidden bg-[#0f1a0a]">
        <Marquee speed={38} className="py-4">
          <span className="text-primary-white/90 font-libre-caslon text-xl md:text-2xl italic">Where your ideas meet in storytelling</span>
        </Marquee>
      </section>
    </div>
  );
};

export default Works;
