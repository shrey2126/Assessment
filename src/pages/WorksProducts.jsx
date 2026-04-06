import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';
import Lightbox from '../components/Lightbox';
import { products } from '../data/products';

const WorksProducts = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const bottomImages = [
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=300&h=300&fit=crop',
  ];

  return (
    <div className="min-h-screen bg-transparent">
      <section className="pt-24 md:pt-28 pb-14 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <Reveal className="max-w-2xl">
              <p className="text-sm font-inter tracking-widest text-primary-white/60 uppercase mb-4">
                Works / Products
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-libre-caslon text-primary-white leading-tight">
                Product visuals that feel
                <br />
                <span className="italic">premium</span>, clean, and alive.
              </h1>
              <p className="mt-6 text-base md:text-lg font-inter text-primary-muted leading-relaxed">
                A curated grid of product stories — crafted with light, texture, and detail. Designed to match the
                cinematic green mood across the site.
              </p>
            </Reveal>

            <Reveal className="flex gap-3" delayMs={120}>
              <Link to="/works">
                <Button variant="secondary">All Works</Button>
              </Link>
              <Link to="/contact">
                <Button variant="primary">Enquire</Button>
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {products.map((product, idx) => {
              const spans =
                idx === 0
                  ? 'md:col-span-2 md:row-span-2'
                  : idx === 5
                    ? 'md:col-span-2'
                    : '';

              return (
                <Reveal key={product.id} delayMs={idx * 60} className={spans}>
                  <div
                    onClick={() => setSelectedMedia(product)}
                    className="relative overflow-hidden rounded-2xl bg-black/20 border border-white/10 img-hover-luxury cursor-pointer group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-4 left-4">
                        <p className="text-white font-inter text-sm">{product.title}</p>
                      </div>
                    </div>
                    <img
                      src={product.thumb}
                      alt={product.title}
                      className="w-full h-full object-cover aspect-square md:aspect-auto min-h-[200px] md:min-h-0"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop&q=80';
                      }}
                    />
                    {/* Media type indicator */}
                    {product.type !== 'image' && (
                      <div className="absolute top-4 right-4 bg-primary-olive text-primary-black px-3 py-1 rounded-full text-xs font-inter font-semibold uppercase">
                        {product.type}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedMedia && (
        <Lightbox
          media={selectedMedia}
          onClose={() => setSelectedMedia(null)}
        />
      )}

      <section className="py-12 md:py-16 px-0 overflow-hidden section-dark">
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

export default WorksProducts;
