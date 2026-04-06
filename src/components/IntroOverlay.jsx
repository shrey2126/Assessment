import { useState, useEffect } from 'react';

const IntroOverlay = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showScroll, setShowScroll] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    // Animation phases
    const phase1 = setTimeout(() => setAnimationPhase(1), 500);
    const phase2 = setTimeout(() => setAnimationPhase(2), 1600);
    const phase3 = setTimeout(() => setShowScroll(true), 2800);

    return () => {
      clearTimeout(phase1);
      clearTimeout(phase2);
      clearTimeout(phase3);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      // Add new trail
      const newTrail = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setTrails(prev => [...prev, newTrail]);

      // Remove trail after animation
      setTimeout(() => {
        setTrails(prev => prev.filter(trail => trail.id !== newTrail.id));
      }, 800);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScroll = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      style={{
        background: 'linear-gradient(135deg, #060d02 0%, #0d1a06 25%, #162608 50%, #1e3410 75%, #0a1404 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 12s ease infinite',
        cursor: 'none'
      }}
    >
      {/* Grid — top right corner, appears after content loads */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '220px',
          height: '180px',
          backgroundImage: `
            linear-gradient(rgba(200,210,190,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,210,190,0.18) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to bottom left, black 0%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to bottom left, black 0%, transparent 80%)',
          opacity: animationPhase >= 2 ? 1 : 0,
          transform: animationPhase >= 2 ? 'translate(0,0)' : 'translate(20px,-20px)',
          transition: 'opacity 1.2s ease 0.6s, transform 1.2s ease 0.6s',
        }}
      />
      {/* Grid — bottom left corner, appears after content loads */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: '220px',
          height: '180px',
          backgroundImage: `
            linear-gradient(rgba(200,210,190,0.18) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200,210,190,0.18) 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to top right, black 0%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to top right, black 0%, transparent 80%)',
          opacity: animationPhase >= 2 ? 1 : 0,
          transform: animationPhase >= 2 ? 'translate(0,0)' : 'translate(-20px,20px)',
          transition: 'opacity 1.2s ease 0.8s, transform 1.2s ease 0.8s',
        }}
      />
      {/* Bottom-right description text */}
      <div
        className="absolute bottom-8 right-8 text-right max-w-[220px]"
        style={{
          opacity: animationPhase >= 2 ? 1 : 0,
          transform: animationPhase >= 2 ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 1s ease 0.4s, transform 1s ease 0.4s',
        }}
      >
        <p className="text-xs text-gray-400 leading-relaxed font-inter">
          Independent photographer specialized in<br />
          editorial portraits and visual narratives.
        </p>
      </div>
      {/* Cursor trails */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="pointer-events-none fixed"
          style={{
            left: trail.x,
            top: trail.y,
            width: '20px',
            height: '20px',
            transform: 'translate(-50%, -50%)',
            animation: 'trailFade 0.8s ease-out forwards',
            zIndex: 9999
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 70%)',
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3)',
            }}
          />
        </div>
      ))}

      {/* Custom cursor */}
      <div
        className="pointer-events-none fixed"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          width: '30px',
          height: '30px',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s',
          zIndex: 10000
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%)',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)',
          }}
        />
      </div>

      <div className="text-center px-4 relative">
        {/* Vision heading with character animation */}
        <div className="mb-20 overflow-hidden">
          <h1 className="text-7xl md:text-9xl lg:text-[11rem] font-libre-caslon italic text-primary-white tracking-wide leading-none">
            {'Vision'.split('').map((char, idx) => (
              <span
                key={idx}
                className="inline-block"
                style={{
                  animation: 'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                  animationDelay: `${idx * 0.08}s`,
                  opacity: 0
                }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Animated circular images container - Professional merge animation */}
        <div className="relative flex items-center justify-center mb-20" style={{ height: '160px' }}>
          <div
            className="relative"
            style={{
              width: animationPhase >= 2 ? '420px' : '340px',
              height: '160px',
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Left circular image - Camera equipment */}
            <div
              className="absolute top-1/2 transform -translate-y-1/2 overflow-hidden"
              style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                left: animationPhase >= 2 ? '0px' : '90px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: 3,
                opacity: animationPhase >= 1 ? 1 : 0,
                transform: animationPhase >= 1 ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0.8)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=400&h=400&fit=crop"
                alt="Camera equipment"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right circular image - Photographer */}
            <div
              className="absolute top-1/2 transform -translate-y-1/2 overflow-hidden"
              style={{
                width: '160px',
                height: '160px',
                borderRadius: '50%',
                right: animationPhase >= 2 ? '0px' : '90px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: 3,
                opacity: animationPhase >= 1 ? 1 : 0,
                transform: animationPhase >= 1 ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0.8)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=400&h=400&fit=crop"
                alt="Photographer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Middle connecting pill shape - appears during merge */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
              style={{
                width: animationPhase >= 2 ? '260px' : '0px',
                height: '160px',
                borderRadius: '80px',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                zIndex: 2,
                opacity: animationPhase >= 2 ? 1 : 0,
                background: 'linear-gradient(90deg, rgba(137, 168, 74, 0.1) 0%, rgba(137, 168, 74, 0.05) 100%)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=400&fit=crop"
                alt="Photography work"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: 'center',
                  mixBlendMode: 'luminosity',
                  opacity: 0.3
                }}
              />
            </div>
          </div>
        </div>

        {/* "that speaks" text with word animation */}
        <div className="mb-24 overflow-hidden">
          <p className="text-5xl md:text-7xl lg:text-8xl font-inter text-gray-400 tracking-wide">
            <span
              className="inline-block mr-4 font-light"
              style={{
                animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                animationDelay: '0.6s',
                opacity: 0
              }}
            >
              that
            </span>
            <span
              className="inline-block font-semibold text-gray-300"
              style={{
                animation: 'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
                animationDelay: '0.8s',
                opacity: 0
              }}
            >
              speaks
            </span>
          </p>
        </div>

        {/* Scroll indicator */}
        {showScroll && (
          <button
            onClick={handleScroll}
            className="cursor-pointer hover:scale-110 transition-transform duration-300 group"
            style={{
              animation: 'fadeIn 1s ease forwards',
              cursor: 'none'
            }}
            aria-label="Scroll to enter"
          >
            <div className="flex flex-col items-center">
              <span className="block mb-3 text-xs uppercase tracking-[0.3em] text-gray-400 font-inter group-hover:text-primary-olive transition-colors">
                SCROLL
              </span>
              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-primary-olive transition-colors animate-bounce"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7" />
              </svg>
            </div>
          </button>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes trailFade {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(2);
          }
        }
      `}</style>
    </div>
  );
};

export default IntroOverlay;
