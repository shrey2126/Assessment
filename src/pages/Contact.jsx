import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import useScrollProgress from '../hooks/useScrollProgress';
import Marquee from '../components/Marquee';

const Contact = () => {
  const heroSectionRef = useRef(null);
  const scrollProgress = useScrollProgress({ target: heroSectionRef });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const heroImages = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=600&fit=crop',
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=600&fit=crop',
  ];

  const bottomImages = [
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=300&h=300&fit=crop',
  ];

  const fanOut = (idx) => {
    const center = 2;
    const spread = 56;
    const rotBase = [-8, -4, 0, 4, 8][idx];
    const x = (idx - center) * (20 + scrollProgress * (spread - 20));
    const rot = rotBase * (0.3 + 0.7 * scrollProgress);
    return `translateX(${x}px) rotate(${rot}deg)`;
  };

  return (
    <div className="min-h-screen bg-[#1a2410]">
      {/* Hero - scroll-linked fan-out image stack */}
      <section ref={heroSectionRef} className="pt-20 md:pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-libre-caslon text-primary-white mb-6 leading-tight">
              Your <span className="italic text-shimmer">vision</span> deserves to be
              <br />
              captured <span className="italic hover:text-primary-olive transition-colors duration-300 cursor-pointer">perfectly</span>.
            </h1>
            <p className="text-xl font-inter text-primary-muted max-w-2xl animate-fade-in-up-blur" style={{ animationDelay: '0.3s' }}>
              Tell me your story, and let's bring it to life together.
            </p>
          </Reveal>

          {/* Image stack - fans out as user scrolls */}
          <Reveal delayMs={100}>
            <div className="relative mt-12 md:mt-16 flex justify-center items-center min-h-[280px] md:min-h-[320px]">
              {heroImages.map((img, idx) => (
                <div
                  key={idx}
                  className="absolute w-32 h-32 md:w-44 md:h-44 rounded-xl overflow-hidden shadow-xl img-hover-luxury hover:z-10 transition-all duration-500 group"
                  style={{ transform: fanOut(idx) }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </Reveal>

          {/* Scroll indicator */}
          <Reveal delayMs={200}>
            <div className="flex flex-col items-center gap-2 mt-8 text-primary-muted">
              <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-xs md:text-sm font-inter uppercase tracking-widest hover:text-primary-olive transition-colors duration-300">Scroll down to reveal</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Let's Create Something Timeless */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-[#0f1a0a]">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-libre-caslon text-primary-white mb-6">
              Let's <span className="italic text-shimmer">Create</span> Something <span className="italic hover:text-primary-olive transition-colors duration-300 cursor-pointer">Timeless</span>.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#1a2410]">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#0f1a0a] rounded-2xl border border-white/10 p-6 md:p-8 hover:border-primary-olive/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary-olive/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Reveal>
                <div>
                  <label htmlFor="name" className="block text-sm font-inter text-primary-muted mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a2410] border border-white/10 rounded-xl text-primary-white font-inter focus:outline-none focus:border-primary-olive/50 transition-all duration-300 placeholder-primary-muted/60 input-luxury hover:border-white/20"
                    placeholder="Jane Smith"
                  />
                </div>
              </Reveal>

              <Reveal delayMs={50}>
                <div>
                  <label htmlFor="email" className="block text-sm font-inter text-primary-muted mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a2410] border border-white/10 rounded-xl text-primary-white font-inter focus:outline-none focus:border-primary-olive/50 transition-all duration-300 placeholder-primary-muted/60 input-luxury hover:border-white/20"
                    placeholder="jane@example.com"
                  />
                </div>
              </Reveal>

              <Reveal delayMs={100}>
                <div>
                  <label htmlFor="subject" className="block text-sm font-inter text-primary-muted mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#1a2410] border border-white/10 rounded-xl text-primary-white font-inter focus:outline-none focus:border-primary-olive/50 transition-all duration-300 placeholder-primary-muted/60 input-luxury hover:border-white/20"
                    placeholder="Regarding project inquiry"
                  />
                </div>
              </Reveal>

              <Reveal delayMs={150}>
                <div>
                  <label htmlFor="message" className="block text-sm font-inter text-primary-muted mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-[#1a2410] border border-white/10 rounded-xl text-primary-white font-inter focus:outline-none focus:border-primary-olive/50 transition-all duration-300 resize-none placeholder-primary-muted/60 input-luxury hover:border-white/20"
                    placeholder="Share your session details, style preferences, timeline ideas, or special requests."
                  />
                </div>
              </Reveal>

              <Reveal delayMs={200}>
                <Button type="submit" variant="primary" className="w-full sm:w-auto uppercase tracking-wider hover:scale-105">
                  Send Message
                </Button>
              </Reveal>
            </form>
          </div>
        </div>
      </section>

      {/* Where your ideas meet - infinite marquee */}
      <section className="py-12 md:py-16 px-0 overflow-hidden bg-[#0f1a0a]">
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
    </div>
  );
};

export default Contact;
