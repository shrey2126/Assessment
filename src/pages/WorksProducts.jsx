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

  const displayProducts = products.slice(0, 15);

  return (
    <div className="min-h-screen bg-transparent">
      <section className="pt-20 md:pt-24 pb-14 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <Reveal direction="left" durationMs={900}>
            <h1 className="text-2xl md:text-3xl font-libre-caslon text-primary-white mb-3">
              Works / <span className="italic">Products</span>
            </h1>
            <p className="text-sm md:text-base font-inter text-primary-muted leading-relaxed max-w-lg mb-10">
              Breathtaking high-resolution photography crafted for those who appreciate detail. From
              sweeping interior shots to the fine nuances of a product, every image is meticulously
              arranged.
            </p>
          </Reveal>

          {/* Mosaic grid — matches reference layout */}
          <div className="flex flex-col gap-2 md:gap-3">

            {/* Row 1: tall left + 2x2 right */}
            <div className="flex gap-2 md:gap-3">
              {/* Big tall image */}
              <div className="w-[38%] flex-shrink-0">
                <Reveal direction="left" durationMs={900}>
                  <div onClick={() => setSelectedMedia(displayProducts[0])} className="relative overflow-hidden rounded-xl cursor-pointer group h-[420px]">
                    <img src={displayProducts[0]?.thumb} alt={displayProducts[0]?.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    {displayProducts[0]?.type !== 'image' && <div className="absolute top-3 right-3 bg-primary-olive text-primary-black px-2 py-0.5 rounded-full text-xs font-inter font-semibold uppercase">{displayProducts[0]?.type}</div>}
                  </div>
                </Reveal>
              </div>
              {/* 2x2 right grid */}
              <div className="flex-1 grid grid-cols-2 gap-2 md:gap-3">
                {displayProducts.slice(1, 5).map((product, i) => (
                  <Reveal key={product.id} direction={i % 2 === 0 ? 'right' : 'left'} delayMs={i * 60} durationMs={850}>
                    <div onClick={() => setSelectedMedia(product)} className="relative overflow-hidden rounded-xl cursor-pointer group h-[200px]">
                      <img src={product.thumb} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                      {product.type !== 'image' && <div className="absolute top-3 right-3 bg-primary-olive text-primary-black px-2 py-0.5 rounded-full text-xs font-inter font-semibold uppercase">{product.type}</div>}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Row 2: 3 equal columns */}
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {displayProducts.slice(5, 8).map((product, i) => (
                <Reveal key={product.id} direction={i === 1 ? 'up' : i === 0 ? 'left' : 'right'} delayMs={i * 55} durationMs={850}>
                  <div onClick={() => setSelectedMedia(product)} className="relative overflow-hidden rounded-xl cursor-pointer group h-[200px]">
                    <img src={product.thumb} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    {product.type !== 'image' && <div className="absolute top-3 right-3 bg-primary-olive text-primary-black px-2 py-0.5 rounded-full text-xs font-inter font-semibold uppercase">{product.type}</div>}
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Row 3: wide left (2/3) + narrow right (1/3) */}
            <div className="flex gap-2 md:gap-3">
              <Reveal direction="left" durationMs={900} className="flex-[2]">
                <div onClick={() => setSelectedMedia(displayProducts[8])} className="relative overflow-hidden rounded-xl cursor-pointer group h-[200px]">
                  <img src={displayProducts[8]?.thumb} alt={displayProducts[8]?.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  {displayProducts[8]?.type !== 'image' && <div className="absolute top-3 right-3 bg-primary-olive text-primary-black px-2 py-0.5 rounded-full text-xs font-inter font-semibold uppercase">{displayProducts[8]?.type}</div>}
                </div>
              </Reveal>
              <Reveal direction="right" delayMs={80} durationMs={900} className="flex-1">
                <div onClick={() => setSelectedMedia(displayProducts[9])} className="relative overflow-hidden rounded-xl cursor-pointer group h-[200px]">
                  <img src={displayProducts[9]?.thumb} alt={displayProducts[9]?.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  {displayProducts[9]?.type !== 'image' && <div className="absolute top-3 right-3 bg-primary-olive text-primary-black px-2 py-0.5 rounded-full text-xs font-inter font-semibold uppercase">{displayProducts[9]?.type}</div>}
                </div>
              </Reveal>
            </div>

            {/* Row 4: narrow left (1/3) + wide right (2/3) */}
            <div className="flex gap-2 md:gap-3">
              <Reveal direction="left" durationMs={900} className="flex-1">
                <div onClick={() => setSelectedMedia(displayProducts[10])} className="relative overflow-hidden rounded-xl cursor-pointer group h-[200px]">
                  <img src={displayProducts[10]?.thumb} alt={displayProducts[10]?.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  {displayProducts[10]?.type !== 'image' && <div className="absolute top-3 right-3 bg-primary-olive text-primary-black px-2 py-0.5 rounded-full text-xs font-inter font-semibold uppercase">{displayProducts[10]?.type}</div>}
                </div>
              </Reveal>
              <Reveal direction="right" delayMs={80} durationMs={900} className="flex-[2]">
                <div onClick={() => setSelectedMedia(displayProducts[11])} className="relative overflow-hidden rounded-xl cursor-pointer group h-[200px]">
                  <img src={displayProducts[11]?.thumb} alt={displayProducts[11]?.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  {displayProducts[11]?.type !== 'image' && <div className="absolute top-3 right-3 bg-primary-olive text-primary-black px-2 py-0.5 rounded-full text-xs font-inter font-semibold uppercase">{displayProducts[11]?.type}</div>}
                </div>
              </Reveal>
            </div>

            {/* Row 5: 3 equal */}
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {displayProducts.slice(12, 15).map((product, i) => (
                <Reveal key={product.id} direction={i === 1 ? 'up' : i === 0 ? 'left' : 'right'} delayMs={i * 55} durationMs={850}>
                  <div onClick={() => setSelectedMedia(product)} className="relative overflow-hidden rounded-xl cursor-pointer group h-[200px]">
                    <img src={product.thumb} alt={product.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    {product.type !== 'image' && <div className="absolute top-3 right-3 bg-primary-olive text-primary-black px-2 py-0.5 rounded-full text-xs font-inter font-semibold uppercase">{product.type}</div>}
                  </div>
                </Reveal>
              ))}
            </div>

          </div>

          {/* Bottom actions */}
          <Reveal direction="up" delayMs={200} durationMs={900}>

          </Reveal>
        </div>
      </section>

      {selectedMedia && (
        <Lightbox media={selectedMedia} onClose={() => setSelectedMedia(null)} />
      )}

      <section className="py-12 md:py-16 px-0 overflow-hidden section-dark">
        <Marquee speed={40} className="py-4">
          <span className="inline-flex items-center gap-6 mx-6">
            <span className="text-primary-white/90 font-libre-caslon text-xl md:text-2xl italic hover:text-shimmer transition-all duration-300">Where your ideas</span>
            {bottomImages.slice(0, 4).map((img, idx) => (
              <img key={idx} src={img} alt="" className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover flex-shrink-0 hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer" />
            ))}
            <span className="text-primary-white/90 font-libre-caslon text-xl md:text-2xl italic hover:text-shimmer transition-all duration-300">meet in</span>
            {bottomImages.map((img, idx) => (
              <img key={`b-${idx}`} src={img} alt="" className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover flex-shrink-0 hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-pointer" />
            ))}
            <span className="text-primary-white/90 font-libre-caslon text-xl md:text-2xl italic hover:text-shimmer transition-all duration-300">storytelling</span>
          </span>
        </Marquee>
      </section>
    </div>
  );
};

export default WorksProducts;
