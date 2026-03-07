import { useEffect, useState } from 'react';

/**
 * Returns scroll progress 0..1. With target ref: 0 when section enters view, 1 when section top reaches viewport top.
 */
export default function useScrollProgress(options = {}) {
  const { target = null } = options;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const getProgress = () => {
      if (target?.current) {
        const rect = target.current.getBoundingClientRect();
        const viewHeight = window.innerHeight;
        const sectionHeight = rect.height;
        if (rect.bottom < 0) return 1;
        if (rect.top > viewHeight) return 0;
        const scrolled = viewHeight - rect.top;
        const total = viewHeight + sectionHeight;
        return Math.min(1, Math.max(0, scrolled / total));
      }
      return 0;
    };

    const onScroll = () => setProgress(getProgress());
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [target]);

  return progress;
}
