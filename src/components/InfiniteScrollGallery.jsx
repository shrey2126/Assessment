const InfiniteScrollGallery = () => {
  // Sample images - replace with your actual images
  const images = [
    'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1559847844-5315695dadae?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=300&fit=crop',
  ];

  return (
    <div className="relative w-full mx-auto">
      <div className="space-y-6">
        {/* Row 1: Right to Left */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-rtl">
            {[...images, ...images].map((img, idx) => (
              <div
                key={`row1-${idx}`}
                className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:z-10 relative group"
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right with Text */}
        <div className="overflow-hidden">
          <div className="flex gap-4 items-center animate-scroll-ltr">
            {/* Duplicate the pattern for seamless loop */}
            {[...Array(2)].map((_, setIdx) => (
              <div key={`set-${setIdx}`} className="flex gap-4 items-center">
                {/* First 3 images */}
                {images.slice(0, 3).map((img, idx) => (
                  <div
                    key={`row2-img1-${setIdx}-${idx}`}
                    className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-110 hover:-rotate-3 hover:shadow-2xl hover:z-10 relative group"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
                
                {/* Center Text with shimmer effect */}
                <div className="flex-shrink-0 px-8 md:px-16">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-libre-caslon text-white whitespace-nowrap hover:text-shimmer transition-all duration-300">
                    Curated <span className="italic">Atmospheres</span>
                  </h2>
                </div>

                {/* Last 2 images */}
                {images.slice(3, 5).map((img, idx) => (
                  <div
                    key={`row2-img2-${setIdx}-${idx}`}
                    className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-2xl hover:z-10 relative group"
                  >
                    <img
                      src={img}
                      alt={`Gallery ${idx + 4}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Right to Left */}
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-rtl">
            {[...images, ...images].map((img, idx) => (
              <div
                key={`row3-${idx}`}
                className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-110 hover:-rotate-3 hover:shadow-2xl hover:z-10 relative group"
              >
                <img
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteScrollGallery;
