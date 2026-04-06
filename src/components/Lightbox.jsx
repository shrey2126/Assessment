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
      {/* Close button outside overlay — z-[500] so nothing can block it */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 w-12 h-12 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-all duration-300 hover:rotate-90"
        style={{ zIndex: 500, pointerEvents: 'all' }}
        aria-label="Close"
      >
        <Icon name="close" className="w-6 h-6 text-white" />
      </button>

      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
        style={{ zIndex: 200 }}
        onClick={onClose}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-primary-olive/30 border-t-primary-olive rounded-full animate-spin" />
          </div>
        )}

        <div
          className="relative max-w-7xl w-full max-h-[90vh] animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {(media.type === 'image' || media.type === 'gif') && (
            <img
              src={media.src}
              alt={media.title}
              className="w-full h-full object-contain rounded-lg"
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
              className="w-full h-full object-contain rounded-lg"
              onLoadedData={() => setIsLoading(false)}
              onError={() => setIsLoading(false)}
            />
          )}

          {media.title && !isLoading && (
            <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-lg animate-fade-in-up">
              <h3 className="text-xl md:text-2xl font-libre-caslon text-white">{media.title}</h3>
              {media.type !== 'image' && (
                <p className="text-sm text-white/70 font-inter uppercase mt-1">{media.type}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Lightbox;
