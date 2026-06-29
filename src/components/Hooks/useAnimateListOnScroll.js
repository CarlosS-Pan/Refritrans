import { useEffect, useRef } from "react";

/**@param {number} threshold - Percentage of the element that must be visible
 *in viewport before the animation is triggered
 **/
const useAnimateListOnScroll = (threshold = 0.5) => {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // stop watching THIS ONE once animated
          }
        });
      },
      { threshold },
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return refs;
};

export default useAnimateListOnScroll;
