import Reveal from './Reveal';

const ImageGrid = ({
  images = [],
  columns = 3, // 2 or 3
  rounded = 'xl',
  hoverScale = true,
  staggerDelay = 60,
}) => {
  return (
    <div
      className={`grid gap-3 md:gap-4 ${
        columns === 2
          ? 'grid-cols-2'
          : 'grid-cols-2 md:grid-cols-3'
      }`}
    >
      {images.map((img, idx) => (
        <Reveal key={idx} delayMs={idx * staggerDelay}>
          <div
            className={`aspect-square rounded-${rounded} overflow-hidden cursor-pointer ${
              hoverScale ? 'img-hover-luxury' : ''
            }`}
          >
            <img
              src={typeof img === 'string' ? img : img.src}
              alt={typeof img === 'string' ? `Image ${idx + 1}` : img.alt || `Image ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default ImageGrid;
