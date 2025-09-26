import { useState, useEffect } from "react";

export const useScroll = (threshold: number = 0) => {
  const [passedThreshold, setPassedThreshold] = useState(false);

  const handleScroll = () => {
    setPassedThreshold(window.scrollY > threshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return passedThreshold;
};
