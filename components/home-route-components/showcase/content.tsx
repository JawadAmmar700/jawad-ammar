"use client";
import { useMemo, useState } from "react";
import { ForwardIcon, BackwardIcon } from "@heroicons/react/24/outline";
import Cards from "./cards";
import { tabs } from "../../../lib/constants";
import { Button } from "@/components/ui/button";

const Content = ({ projects }: { projects: ProjectType[] }) => {
  // const [revealCard, setRevealCard] = useState<boolean>(false);
  const [tabCatategory, setTabCategory] = useState("All");
  const [paginationLeft, setPaginationLeft] = useState<number>(0);
  const [paginationRight, setPaginationRight] = useState<number>(4);

  const data = useMemo(() => {
    if (tabCatategory === "All") return projects;
    return projects.filter((item: any) =>
      item.name.includes(tabCatategory || tabCatategory.toLowerCase())
    );
  }, [tabCatategory]);

  const load = (next: boolean, prev: boolean) => {
    if (next) {
      setPaginationLeft(paginationLeft + 4);
      setPaginationRight(paginationRight + 4);
    }
    if (prev) {
      setPaginationLeft(paginationLeft - 4);
      setPaginationRight(paginationRight - 4);
    }
  };

  const filterByCategory = (category: string) => {
    setTabCategory(category);
    setPaginationLeft(0);
    setPaginationRight(4);
  };

  return (
    <div className="w-full h-full flex flex-col items-center relative">
      <div className="w-full flex items-center justify-between md:justify-evenly px-5  sm:px-24">
        <div className="tabs tabs-boxed bg-black text-white">
          {tabs.map((item, i) => (
            <Button
              onClick={() => filterByCategory(item)}
              key={item + i}
              className={`text-white ml-2 ${
                item === tabCatategory && "bg-blue-500 "
              } uppercase `}
            >
              {item}
            </Button>
          ))}
        </div>
        <div className="flex items-center space-x-5">
          <button
            disabled={paginationLeft === 0}
            onClick={() => load(false, true)}
            className="btn btn-square btn-outline btn-md"
          >
            <BackwardIcon className="h-6 w-6 text-white " />
          </button>
          <button
            disabled={paginationRight >= data.length}
            onClick={() => load(true, false)}
            className="btn btn-square btn-outline btn-md"
          >
            <ForwardIcon className="h-6 w-6 text-white " />
          </button>
        </div>
      </div>

      <div className="w-full flex items-center justify-center relative mt-10 overflow-hidden">
        <div className="px-12 space-y-3 w-full sm:w-[400px] md:w-[600px] lg:w-[800px] flex flex-col   items-center justify-center">
          <Cards
            data={data}
            paginationLeft={paginationLeft}
            paginationRight={paginationRight}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
