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
    const currentRef = domRef.current;
    domRef.current.addEventListener("mouseenter", mouseEnter);
    domRef.current.addEventListener("mouseleave", mouseLeave);
    return () => {
      currentRef.removeEventListener("mouseenter", mouseEnter);
      currentRef.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return [hovered, domRef];
}

export default useHover;
