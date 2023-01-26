import Image from "next/image";

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <button
      onClick={onClick}
      type="button"
      className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
    >
      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <Image
          src="/navigation/arrow-prev.svg"
          alt="arrow-prev"
          width={24}
          height={24}
        />
        <span className="sr-only">Previous</span>
      </span>
    </button>
  );
};

export default PrevArrow;
