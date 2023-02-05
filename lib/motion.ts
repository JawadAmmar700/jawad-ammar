const cardVariants = (i: number) => ({
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.3,
    },
  },
  hide: {
    y: -20 * i,
    opacity: 0,
  },
  hover: {
    height: 300,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
});

const aboutVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    opacity: 0,
  },
};

export { cardVariants, aboutVariants };
