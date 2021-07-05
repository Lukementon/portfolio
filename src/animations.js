export const pageAnim = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: {
    y: 100,
  },
  show: {
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.75,
    },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.75,
    },
  },
};
export const fadeTwo = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1.5,
    },
  },
};

export const photoAnim = {
  hidden: { opacity: 0, scale: 1.5 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.85,
    },
  },
};

export const scrollReveal = {
  hidden: { opacity: 0, x: 300, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
    },
  },
};
export const scrollRevealTwo = {
  hidden: { opacity: 0, x: -300, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.5,
    },
  },
};
export const scrollRevealThree = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const slider = {
  hidden: { x: "-130%", skew: "30deg" },
  show: {
    x: "300%",
    skew: "-60deg",
    transition: { ease: "easeOut", duration: 1 },
  },
};
export const sliderContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      ease: "easeOut",
    },
  },
};
