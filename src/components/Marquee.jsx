import { useMemo } from 'react';

const Marquee = ({ children, items = [], speed = 35, className = '' }) => {
  const content = useMemo(() => {
    if (items.length) {
      const segment = (
        <span className="inline-flex items-center gap-4 mx-6 whitespace-nowrap flex-shrink-0">
          {items.map((item, i) => (
            typeof item === 'string' ? (
              <span key={i} className="text-primary-white/90 font-libre-caslon text-xl md:text-2xl italic">{item}</span>
            ) : (
              <span key={i}>{item}</span>
            )
          ))}
        </span>
      );
      return <>{segment}{segment}</>;
    }
    return null;
  }, [items]);

  const childContent = children ? (
    <>
      <span className="inline-flex items-center gap-4 md:gap-6 whitespace-nowrap flex-shrink-0">{children}</span>
      <span className="inline-flex items-center gap-4 md:gap-6 whitespace-nowrap flex-shrink-0">{children}</span>
    </>
  ) : content;

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="flex w-max animate-marquee" style={{ animationDuration: `${speed}s` }}>
        {childContent}
      </div>
    </div>
  );
};

export default Marquee;
