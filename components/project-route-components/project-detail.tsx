import Image from "next/image";

const ProjectDetail = ({
  name,
  description,
  technology,
}: ProjectDetailProps) => {
  return (
    <div id="detail" className="flex items-center justify-center">
      <section className="flex flex-col space-y-5 items-center mt-16 w-4/5 ">
        <h1 className="text-neutral-content font-bold text-3xl">
          <span className="text-blue-500">{String("{ ")}</span>
          {name}
          <span className="text-blue-500">{String(" }")}</span>
        </h1>

        <p className="text-neutral-content text-center w-4/5">{description}</p>

        {/* techno used */}
        <div className="flex flex-col items-center space-y-6 w-4/5 ">
          <h1 className="text-neutral-content font-bold text-3xl">
            <span className="text-blue-500">{String("{ ")}</span>
            Technology Used
            <span className="text-blue-500">{String(" }")}</span>
          </h1>
          <div className=" grid grid-cols-4 gap-x-2 gap-y-4 place-items-center md:grid-cols-6 w-full lg:w-4/5">
            {technology.map((item, id) => (
              <div
                key={id}
                className="indicator group hover:scale-110 transform transition-all duration-150"
              >
                <p className="transform transition-all duration-300 hidden group-hover:block indicator-item indicator-top indicator-end badge bg-neutral-content text-sm  outline-none border-0 text-black font-medium ">
                  <span>{item.name}</span>
                </p>

                <div
                  className="flex items-center space-x-1 p-3 rounded-xl"
                  style={{
                    backgroundColor: `#${item.color}`,
                    boxShadow: `5px 5px #${item.color}50, 10px 10px #${item.color}40, 15px 15px #${item.color}30, 20px 20px #${item.color}20, 25px 25px #${item.color}10`,
                  }}
                >
                  <Image
                    alt={`${item.name.toLowerCase()} icon}`}
                    src={`/technology/${item.name.toLowerCase()}.svg`}
                    width={25}
                    height={25}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* techno used */}
      </section>
    </div>
  );
};

export default ProjectDetail;
