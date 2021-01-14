import { useState, useRef, useEffect } from "react";

function useHover() {
  const [hovered, setHovered] = useState(false);
  const domRef = useRef(null);

  function mouseEnter() {
    setHovered(true);
  }

  function mouseLeave() {
    setHovered(false);
  }

  useEffect(() => {
    const effectRef = domRef;
    effectRef.current.addEventListener("mouseenter", mouseEnter);
    effectRef.current.addEventListener("mouseleave", mouseEnter);
    return () => {
      effectRef.current.removeEventListener("mouseenter", mouseEnter);
      effectRef.current.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return [hovered, domRef];
}

export default useHover;
