const ThreeRowScrollGallery = ({ images = [] }) => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <div className="w-full space-y-4 overflow-hidden py-8 -mx-4 sm:-mx-6 lg:-mx-8">
      {/* Row 1: Right to Left */}
      <div className="overflow-hidden">
        <div className="flex gap-4 animate-scroll-rtl">
          {duplicatedImages.map((img, idx) => (
            <div
              key={`row1-${idx}`}
              className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-3 hover:z-10 relative group"
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

      {/* Row 2: Left to Right with "Curated Atmospheres" text */}
      <div className="overflow-hidden">
        <div className="flex gap-4 items-center animate-scroll-ltr">
          {[...Array(2)].map((_, setIdx) => (
            <div key={`set-${setIdx}`} className="flex gap-4 items-center">
              {/* First 3 images */}
              {images.slice(0, 3).map((img, idx) => (
                <div
                  key={`row2-img1-${setIdx}-${idx}`}
                  className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-rotate-3 hover:z-10 relative group"
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}

              {/* Center Text */}
              <div className="flex-shrink-0 px-8 md:px-16">
                <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-libre-caslon text-white whitespace-nowrap">
                  Curated <span className="italic">Atmospheres</span>
                </h2>
              </div>

              {/* Last images */}
              {images.slice(3, 6).map((img, idx) => (
                <div
                  key={`row2-img2-${setIdx}-${idx}`}
                  className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:rotate-3 hover:z-10 relative group"
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
          {duplicatedImages.map((img, idx) => (
            <div
              key={`row3-${idx}`}
              className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-rotate-3 hover:z-10 relative group"
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
  );
};

export default ThreeRowScrollGallery;
