import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const slideIn = (
  direction: "left" | "right" | "up" | "down",
  distance = 100
): Variants => {
  let hidden = {};
  let exit = {};

  switch (direction) {
    case "left":
      hidden = { x: -distance, opacity: 0 };
      exit = { x: -distance, opacity: 0 };
      break;
    case "right":
      hidden = { x: distance, opacity: 0 };
      exit = { x: distance, opacity: 0 };
      break;
    case "up":
      hidden = { y: -distance, opacity: 0 };
      exit = { y: -distance, opacity: 0 };
      break;
    case "down":
      hidden = { y: distance, opacity: 0 };
      exit = { y: distance, opacity: 0 };
      break;
  }

  return {
    hidden,
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      ...exit,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
};
