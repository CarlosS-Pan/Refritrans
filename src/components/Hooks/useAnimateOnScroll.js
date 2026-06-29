import { useEffect, useRef } from "react";

/**@param {number} threshold - Percentage of the element that must be visible
 *in viewport before the animation is triggered
 **/
const useAnimateOnScroll = (threshold = 0.5) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.disconnect(); // stop watching after animation
        }
      },
      { threshold },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useAnimateOnScroll;
