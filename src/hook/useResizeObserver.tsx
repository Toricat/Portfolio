import {  useState, useEffect } from 'react';

interface Dimensions {
    width: number;
    height: number;
  }
  
  function useResizeObserver(ref: React.RefObject<HTMLElement>): Dimensions | null {
    const [dimensions, setDimensions] = useState<Dimensions | null>(null);
  
    useEffect(() => {
      const target = ref.current;
      if (!target) return;
  
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          setDimensions({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          });
        }
      });
  
      resizeObserver.observe(target);
  
      return () => {
        if (target) {
          resizeObserver.unobserve(target);
        }
      };
    }, [ref]);
  
    return dimensions;
  }
  
  export default useResizeObserver;
