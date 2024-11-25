import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const updateMousePosition = (event) => {
      setMousePosition({ x: event.pageX, y: event.pageY });
      setIsFixed(false); // Revert to normal behavior when the mouse moves
    };

    const handleScroll = () => {
      setIsFixed(true); // Fix the element when scrolling
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { mousePosition, isFixed };
};

export default useMousePosition;