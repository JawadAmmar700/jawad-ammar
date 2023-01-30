const OverflowImage = ({ src, name, description }: OverflowImageProps) => {
  return (
    <div
      className="-mt-10 hero min-h-screen z-0"
      style={{ backgroundImage: `url(/assets/${src.toLowerCase()}.png)` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content h-full w-full flex items-end justify-start text-left mb-5">
        <div className="max-w-md text-stone-100">
          <h1 className="mb-5 text-5xl font-bold">{name}</h1>
          <p className="mb-5">{description.slice(0, 150)}...</p>
          <a
            href="#detail"
            className="bg-gradient-to-tr from-pink-500 to-violet-500 p-3 rounded-lg hover:opacity-80 transition-all duration-150 text-sm font-medium"
          >
            Read More
          </a>
        </div>
      </div>
      <div className="absolute -bottom-3 left-0 w-full h-5 backdrop-blur-sm bg-gradient-to-t from-transparent to-[#2A303C]/30 filter drop-shadow-md"></div>
    </div>
  );
};

export default OverflowImage;
