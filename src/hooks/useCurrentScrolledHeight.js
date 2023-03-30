import { useState, useEffect } from 'react';


export default function useCurrentScrolledHeight() {
  const [scroll, setSroll] = useState({scrolledHeight: 0});

  useEffect(() => {
    function getScrolledHeight() {
      const { scrollY: scrolledHeight } = window;
      return {
        scrolledHeight
      };
    }

    function handleReScroll() {
      setSroll(getScrolledHeight());
    }

    handleReScroll()

    window.addEventListener('scroll', handleReScroll);
    return () => window.removeEventListener('scroll', handleReScroll);
  }, []);

  return scroll;
}