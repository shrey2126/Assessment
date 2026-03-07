import { useEffect, useState } from 'react';
import Icon from './Icon';

const Lightbox = ({ media, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
    
    // Handle escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!media) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:rotate-90 z-10"
        aria-label="Close"
      >
        <Icon name="close" className="w-6 h-6 text-white" />
      </button>

      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-primary-olive/30 border-t-primary-olive rounded-full animate-spin"></div>
        </div>
      )}

      {/* Media container */}
      <div 
        className="relative max-w-7xl w-full max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {media.type === 'image' && (
          <img
            src={media.src}
            alt={media.title}
            className="w-full h-full object-contain rounded-lg"
            onLoad={() => setIsLoading(false)}
            onError={(e) => {
              setIsLoading(false);
              e.target.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=900&fit=crop&q=80';
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
        
        {media.type === 'gif' && (
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

        {/* Title at bottom left */}
        {media.title && !isLoading && (
          <div className="absolute bottom-6 left-6 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-lg animate-fade-in-up">
            <h3 className="text-xl md:text-2xl font-libre-caslon text-white">
              {media.title}
            </h3>
            {media.type !== 'image' && (
              <p className="text-sm text-white/70 font-inter uppercase mt-1">{media.type}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Lightbox;
