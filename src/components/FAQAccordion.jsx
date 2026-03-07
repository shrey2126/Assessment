import { useState } from 'react';
import Icon from './Icon';
import Reveal from './Reveal';

const FAQAccordion = ({
  title = 'FAQs',
  subtitle = 'Curious about collaboration? Here are some helpful answers to your FAQs, designed to simplify the process.',
  faqImage = 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=800&fit=crop',
  itemsOnly = false, // when true, only render the accordion list (for custom layouts)
  items = [
    'What equipment do you use for photography?',
    'Can I bring props to my photoshoot?',
    'How do I prepare my files for a photoshoot?',
    'How long does a typical session take?',
    'What should I do if the weather is bad on the day of my shoot?',
    'How can I contact you to book a session or get a quote?',
  ],
  layout = 'split', // 'split' = image left, FAQs right | 'stack' = image above, FAQs below
}) => {
  const [openIdx, setOpenIdx] = useState(null);

  const accordionList = (
    <div className="space-y-3">
      {items.map((question, idx) => (
        <Reveal key={idx} delayMs={idx * 60}>
          <div
            className="bg-[#1a2410] rounded-xl border border-primary-olive/20 overflow-hidden transition-all duration-300 hover:border-primary-olive/40"
          >
            <button
              type="button"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full px-6 py-4 flex justify-between items-center text-left font-inter text-primary-white hover:text-primary-olive transition-colors"
            >
              <span>{question}</span>
              <Icon
                name="chevronDown"
                className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                  openIdx === idx ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid accordion-content ${
                openIdx === idx ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-4 text-primary-muted text-sm md:text-base font-inter">
                  Professional answer tailored to your specific needs and project requirements. We ensure clear communication and deliver high-quality results.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );

  if (itemsOnly) return accordionList;

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#0f1a0a]">
      <div className="max-w-6xl mx-auto">
        <div className={`grid grid-cols-1 ${layout === 'split' ? 'lg:grid-cols-2' : ''} gap-12 items-start`}>
          {/* Image - left or top */}
          <Reveal className={layout === 'stack' ? 'order-2' : ''}>
            <div className="relative rounded-2xl overflow-hidden h-full min-h-[400px] group">
              <img
                src={faqImage}
                alt="FAQ"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>

          {/* FAQs */}
          <div className={layout === 'stack' ? 'order-1' : ''}>
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-libre-caslon italic text-primary-white mb-4">
                {title}
              </h2>
              <p className="text-lg font-inter text-primary-muted mb-8 leading-relaxed">
                {subtitle}
              </p>
            </Reveal>

            {accordionList}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
