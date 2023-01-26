import Image from "next/image";
import React from "react";

const ProjectDetail = ({
  name,
  description,
  technology,
}: ProjectDetailProps) => {
  return (
    <div id="detail" className="flex items-center justify-center">
      <section className="flex flex-col space-y-5 items-center mt-16 w-4/5 ">
        <h1 className="text-neutral-content font-bold text-3xl">
          <span>{String("{")}</span>
          {name}
          <span>{String("}")}</span>
        </h1>
        <p className="text-neutral-content text-center w-4/5  ">
          {description}
        </p>
        {/* techno used */}
        <div className="flex flex-col items-center space-y-6 w-4/5 ">
          <h1 className="text-neutral-content font-bold text-3xl">
            Technology Used
          </h1>
          <div className=" grid grid-cols-4 gap-x-2 gap-y-4 place-items-center md:grid-cols-6 w-full lg:w-4/5">
            {technology.map((item, id) => (
              <div key={id} className="indicator">
                <span className="indicator-item indicator-top indicator-end badge bg-[#000000] outline-none border-0 text-white font-medium ">
                  {item.name}
                </span>

                <div
                  className="flex items-center space-x-1 p-3  rounded-lg"
                  style={{ backgroundColor: `#${item.color}` }}
                >
                  <Image
                    alt={`${item.name.toLocaleLowerCase()} icon}`}
                    src={`/technology/${item.name.toLocaleLowerCase()}.svg`}
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
