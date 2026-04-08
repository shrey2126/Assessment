import { useEffect, useState } from 'react';
import Icon from './Icon';

const Lightbox = ({ media, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEscape = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!media) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/95 flex items-center justify-center md:p-4 animate-fade-in"
        style={{ zIndex: 200 }}
        onClick={onClose}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-primary-olive/30 border-t-primary-olive rounded-full animate-spin" />
          </div>
        )}

        {/* Mobile: full screen container | Desktop: constrained */}
        <div
          className="relative w-full h-full md:max-w-7xl md:w-full md:max-h-[90vh] md:h-auto animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button — inside top-right on mobile */}
          <button
            onClick={onClose}
            className="md:hidden absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-all duration-300 z-10"
            aria-label="Close"
          >
            <Icon name="close" className="w-5 h-5 text-white" />
          </button>

          {(media.type === 'image' || media.type === 'gif') && (
            <img
              src={media.src}
              alt={media.title}
              className="w-full h-full md:h-auto object-cover md:object-contain md:rounded-lg"
              onLoad={() => setIsLoading(false)}
              onError={(e) => {
                setIsLoading(false);
                e.target.src = media.thumb || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=900&fit=crop&q=80';
              }}
            />
          )}

          {media.type === 'video' && (
            <video
              src={media.src}
              controls
              autoPlay
              className="w-full h-full md:h-auto object-cover md:object-contain md:rounded-lg"
              onLoadedData={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
            />
          )}

          {media.title && !isLoading && (
            <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-lg animate-fade-in-up">
              <h3 className="text-xl md:text-2xl font-libre-caslon text-white">{media.title}</h3>
              {media.type !== 'image' && (
                <p className="text-sm text-white/70 font-inter uppercase mt-1">{media.type}</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Desktop-only close button — fixed top-right */}
      <button
        onClick={onClose}
        className="hidden md:flex fixed top-4 right-4 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 items-center justify-center transition-all duration-300 hover:rotate-90"
        style={{ zIndex: 500, pointerEvents: 'all' }}
        aria-label="Close"
      >
        <Icon name="close" className="w-6 h-6 text-white" />
      </button>
    </>
  );
};

export default Lightbox;
