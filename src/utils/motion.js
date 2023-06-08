export const heading = {
  hidden: {
    opacity: 0,
  },
  show: (i) => ({
    opacity: 1,
    transition: {
      delay: i * 0.05,
    },
  }),
};

export const text = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: (delay) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
      delay: delay,
    },
  }),
};

export const button = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

export const card = (i, duration) => ({
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: duration,
    },
  },
});

export const creator = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};
