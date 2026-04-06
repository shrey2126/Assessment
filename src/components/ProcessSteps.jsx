import { useState } from 'react';
import Reveal from './Reveal';

const ProcessSteps = ({
  title = 'Process',
  subtitle = 'We think successful outcomes stem from clear communication and a unified vision, ensuring alignment from our initial discussion to the final delivery.',
  steps = [
    { num: '1', title: 'Schedule a Call', desc: "Let's connect for a brief discovery call to explore your vision.", image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop' },
    { num: '2', title: 'Project Brief', desc: 'Comprehensive planning phase where we outline creative direction.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop' },
    { num: '3', title: 'Shoot', desc: 'Professional photography session with meticulous attention to detail.', image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop' },
    { num: '4', title: 'Delivery', desc: 'Receive professionally edited, high-resolution images.', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop' },
  ],
  variant = 'default', // 'default' | 'compact' (for Home - accordion style with chevron)
  renderSection = true,
}) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const content = (
    <>
      {renderSection && (
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-libre-caslon italic text-primary-white mb-4">
            {title}
          </h2>
          <p className="text-lg font-inter text-primary-muted mb-12 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        </Reveal>
      )}
      <div className="space-y-4">
        {steps.map((step, idx) => {
          const isExpanded = expandedIndex === idx;
          
          return (
            <Reveal key={idx} delayMs={idx * 80}>
              <div className="bg-[#0f1a0a] rounded-xl border border-primary-olive/20 hover:border-primary-olive/50 transition-all duration-500 overflow-hidden hover:shadow-xl hover:shadow-primary-olive/10">
                {/* Collapsed: just title row. Expanded: image left + title+desc right */}
                <div
                  className="cursor-pointer"
                  onClick={() => toggleExpand(idx)}
                >
                  {isExpanded ? (
                    /* Expanded layout: image left, content right */
                    <div className="p-4 flex flex-col sm:flex-row gap-4 items-stretch">
                      {step.image && (
                        <div className="sm:w-2/5 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-48 sm:h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex flex-col justify-center gap-3 flex-1 py-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary-olive flex items-center justify-center flex-shrink-0">
                            <span className="text-primary-black text-lg font-bold font-libre-caslon">{step.num}</span>
                          </div>
                          <h3 className="text-xl font-inter font-semibold text-primary-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-base font-inter text-primary-muted leading-relaxed">
                          {step.desc}
                        </p>
                        {step.details && (
                          <p className="text-sm font-inter text-primary-muted/80 leading-relaxed">
                            {step.details}
                          </p>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Collapsed layout: just icon + title */
                    <div className="p-6 flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-full bg-primary-olive flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-lg group-hover:shadow-primary-olive/50">
                        <span className="text-primary-black text-xl font-bold font-libre-caslon">{step.num}</span>
                      </div>
                      <h3 className="text-xl font-inter font-semibold text-primary-white group-hover:text-primary-olive transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </>
  );

  if (!renderSection) {
    return <div>{content}</div>;
  }

  return (
    <section className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#1a2410]`}>
      <div className={variant === 'compact' ? 'max-w-4xl mx-auto' : 'max-w-6xl mx-auto'}>
        {content}
      </div>
    </section>
  );
};

export default ProcessSteps;
