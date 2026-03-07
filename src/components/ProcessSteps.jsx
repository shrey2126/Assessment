import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon';
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
                {/* Header - Always Visible */}
                <div 
                  className="p-6 flex items-center gap-4 cursor-pointer group"
                  onClick={() => toggleExpand(idx)}
                >
                  <div className={`w-12 h-12 rounded-full bg-primary-olive flex items-center justify-center flex-shrink-0 transition-all duration-500 ${isExpanded ? 'scale-110 rotate-12' : 'group-hover:scale-110 group-hover:rotate-12'} group-hover:shadow-lg group-hover:shadow-primary-olive/50`}>
                    <span className="text-primary-black text-xl font-bold font-libre-caslon">{step.num}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-inter font-semibold transition-all duration-300 ${isExpanded ? 'text-primary-olive' : 'text-primary-white group-hover:text-primary-olive'}`}>
                      {step.title}
                    </h3>
                    {variant === 'default' && !isExpanded && (
                      <p className="text-sm font-inter text-primary-muted mt-1 transition-all duration-300 group-hover:text-primary-white/80">
                        {step.desc}
                      </p>
                    )}
                  </div>
                  <Icon 
                    name={isExpanded ? "chevronDown" : "chevronRight"} 
                    className={`w-5 h-5 text-primary-olive flex-shrink-0 transition-all duration-300 ${isExpanded ? 'rotate-0' : 'group-hover:translate-x-2'}`} 
                  />
                </div>

                {/* Expanded Content */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 pt-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-primary-olive/20 pt-6">
                        {/* Image */}
                        {step.image && (
                          <div className="rounded-xl overflow-hidden img-hover-luxury">
                            <img 
                              src={step.image} 
                              alt={step.title}
                              className="w-full h-48 md:h-64 object-cover"
                            />
                          </div>
                        )}
                        
                        {/* Description */}
                        <div className="flex flex-col justify-center">
                          <p className="text-base font-inter text-primary-muted leading-relaxed">
                            {step.desc}
                          </p>
                          {step.details && (
                            <p className="text-sm font-inter text-primary-muted/80 mt-4 leading-relaxed">
                              {step.details}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
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
